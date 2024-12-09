function doGet(e) {
  // Retrieve parameters from the GET request
  const folderPath = e.parameter.folderName
  const fileName = e.parameter.fileName;
  const formName = e.parameter.formName;
  const title = e.parameter.title;
  const descipcion = e.parameter.descipcion;
  const formId = e.parameter.formId;  // New parameter for form ID (optional)
  const startElement = parseInt(e.parameter.startElement, 10) || 0;
  const stopElement = parseInt(e.parameter.stopElement, 10) || 0;

  console.log('App has started processing.');
  console.log('Parameters received: %s', JSON.stringify(e.parameter));

  // Call your Aplication function with the parameters
  const result = Aplication(folderPath, fileName, formName, title, descipcion, formId, startElement, stopElement);

  // Return the URL and form ID as JSON
  return ContentService.createTextOutput(JSON.stringify(result))
                        .setMimeType(ContentService.MimeType.JSON);
}

function debug (){

  folderName = 'prueba deploy';
  fileName = 'CSV Paquete 1.csv';
  formName = 'Formulario Paquete 1';
  title = 'Paquete 1';
  descipcion = '';
  formId = '';
  startElement = 0;
  stopElement = 9;
  Logger.log("prueba");
  const result = Aplication(folderPath, fileName, formName, title, descipcion, formId, startElement, stopElement);
}

function Aplication(folderPath, fileName, formName, title, descipcion, formId, startElement, stopElement) {

  const csvData = readCSV(fileName);
  const elementList = parseCSV(csvData, '¬', '~');

  const result = createOrOpenForm(folderPath, formName, title, descipcion, elementList, formId, startElement, stopElement);
  return result;
}

function readCSV(fileName) {
  // Search for files with the specified name
  var files = DriveApp.getFilesByName(fileName);

  // Check if the file exists
  if (!files.hasNext()) {
    Logger.log("Error: File with the name '" + fileName + "' not found.");
    throw new Error("No se encontro el archivo con nombre " + fileName);
  }

  // Handle multiple files with the same name
  var file = files.next();
  if (files.hasNext()) {
    Logger.log("Warning: Multiple files with the name '" + fileName + "' found. Using the first one found.");
    throw new Error("se encontraron multiples archivos con nombre " + fileName);
  }

  // Check if the file is empty
  var csvData = file.getBlob().getDataAsString();
  if (!csvData.trim()) {
    Logger.log("Error: The file is empty.");
    throw new Error("el archivo " + fileName + " esta vacio");
  }

  return csvData;
}

function parseCSV(data, colDelimiter, rowDelimiter){
  // Split the CSV data by line
  var rows = data.split(rowDelimiter);

  // Process each row and convert elements to the required types
  var parsedData = rows.map(function(row) {
    var elements = row.split(colDelimiter);

    // Parse each element based on the expected data type
    return [
      parseInt(elements[0], 10),                        // Convert first element to integer
      elements[1],                                      // Keep second element as string
      elements[2],                                      // Keep third element as string
      elements[3] ? elements[3].split(',') : [],        // Convert to array of strings or empty array if empty
      elements[4] === 'true'                            // Convert last element to boolean
    ];
  });
  // Remove the last element from parsedData
  parsedData.pop();
  parsedData.shift();

  return parsedData;
}

function getFolderByPath(folderPath) {
  // Split the folderPath into individual folder names
  const folderNames = folderPath.split('/');
  
  // Start from the root folder
  let currentFolder = DriveApp.getRootFolder();
  
  for (let i = 0; i < folderNames.length; i++) {
    const folderIterator = currentFolder.getFoldersByName(folderNames[i]);
    if (folderIterator.hasNext()) {
      currentFolder = folderIterator.next();
    } else {
      throw new Error(`Folder not found: ${folderNames[i]} in path ${folderPath}`);
    }
  }
  
  return currentFolder;
}

function createOrOpenForm(folderPath, nombre, titulo, descripcion, listaElementos, formId, startElement, stopElement) {
  let folder;
  try {
    folder = getFolderByPath(folderPath);
    Logger.log("Folder found: " + folder.getName());
  } catch (e) {
    Logger.log(e.message);
  }

  let form;
  if (formId) {
    // If formId is provided, open the existing form
    form = FormApp.openById(formId);
    Logger.log('Using existing form: ' + formId);
  } else {
    // If no formId is provided, create a new form
    form = FormApp.create(nombre);
    form.setTitle(titulo);
    form.setDescription(descripcion);

    // Move the form to the specified folder
    DriveApp.getFileById(form.getId()).moveTo(folder);
  }

    // Start adding elements from the specified index
  listaElementos.slice(startElement).forEach((item, index) => {
    const originalIndex = startElement + index;
    if (originalIndex > stopElement) {
    return; // Skip further processing for this element
  }
    addElement(form, item);
  });

  Logger.log(form.getEditUrl());
  return {
    url: form.getEditUrl(),
    formId: form.getId()
  };
}

function addElement(form, item){
  switch (item[0]) {
    //Añadir una Secion
    case 0:
      addSecction(form, item[1], item[2]);
      break;

    //Añadir un texto
    case 1:
      addText(form, item[1], item[2]);
      break;

    //Añadir un multiple choice
    case 2:
      addMultipleChoice(form, item[1], item[2], item[3]);
      break;

    //Añadir un parrafo
    case 3:
      addParrafo(form, item[1], item[2], item[4]);
      break;
    default:
      throw new Error("No se pudo identificar el elemento a  ingresar" + item);
  }
}
  
function addSecction(form, titulo, descipcion){
  form.addPageBreakItem().setTitle(titulo).setHelpText(descipcion);
}

function addText(form, titulo, descipcion) {
  form.addTextItem()
    .setTitle(titulo)
    .setHelpText(descipcion + "\nNO ES NECESARIO RESPONDER")
    .setRequired(false);
}

function addMultipleChoice(form, titulo, descipcion, valores) {
  form.addMultipleChoiceItem()
      .setTitle(titulo)
      .setHelpText(descipcion)
      .setChoiceValues(valores)
      .setRequired(true);
}

function addParrafo(form, titulo, descipcion, obligatorio){
  form.addParagraphTextItem()
          .setTitle(titulo)
          .setHelpText(descipcion)
          .setRequired(obligatorio);
}
