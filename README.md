# Pipeline para Evaluación de Datos Generados por IA

Este proyecto implementa un pipeline para **crear formularios de manera automática**. Estos formularios son utilizados por expertos de dominio para evaluar datos generados por Inteligencia Artificial. Además, incluye un ejemplo práctico para su uso.

---

## Descripción

### Datos de Entrada
- **Fuente de datos:** Se espera que los datos estén almacenados en **Google Drive**, en formato **CSV**.
- **Plantillas:** Se requiere una plantilla para definir los elementos y el orden del formulario. Estas plantillas deben estar en un documento de **Google Sheets**. Una plantilla base está incluida en el repositorio ([enlace a la plantilla](#)).

### Flujo de Trabajo
1. Configuración de un proyecto en Google Apps Script.
2. Rellenar datos basicos en Google Colab.
3. Personalización opcional del formulario según los requerimientos.
4. Generación de formularios listos para distribuir a los evaluadores.

---

## Instrucciones de Instalación y Ejecución

### 1. Configuración de Google Apps Script
1. Abre el archivo `AppsScript.js` del repositorio.
2. Ve a [Google Apps Script](https://script.google.com/home).
3. Crea un nuevo proyecto:
   - Haz clic en "Nuevo proyecto".  
     **![Imagen 1]()**
   - Copia y pega el contenido de `AppsScript.js` en el editor.  
     **![Imagen 2]()**

4. Implementa el proyecto:
   - Haz clic en **Implementar** y selecciona **Nueva implementación**.  
     **![Imagen 3]()**
   - Configura los siguientes parámetros:
     - **Tipo:** Aplicación web  
       **![Imagen 4]()**
     - **Descripción:** Ej. "Creación de Formulario"
     - **Ejecutar como:** Tú mismo (el usuario actual).
     - **Acceso:** Cualquier usuario.  
       **![Imagen 5]()**
   - Haz clic en **Implementar** y copia el URL generado.  
     **![Imagen 6]()**

### 2. Rellenar datos basicos en Google Colab
1. Abre el notebook de Google Colab asociado al pipeline:  
   [![Abrir en Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/juan-oviedo/PipelineEvaluacion/blob/main/Pipeline.ipynb).
2. Rellena los campos requeridos en las secciones iniciales del notebook.  
   **![Imagen 7]()**

### 3. Personalización del Formulario (Opcional)
En la sección **3) Personalización y funciones** del notebook, puedes ajustar el pipeline según tus necesidades:
- Ordenar los elementos de las plantillas.
- Rellenar campos en tiempo de ejecución.
- Cambiar el formato de los paquetes de datos.

### 4. Generación de Formularios
Ejecuta la sección **4) Pipeline** para generar los formularios. Al finalizar, obtendrás un archivo **CSV** con los formularios listos para ser asignados a los evaluadores.

---

## Ejemplo de Uso
Se incluye un ejemplo práctico en el notebook de Google Colab para mostrar el flujo completo, desde la configuración inicial hasta la generación final de los formularios.

---

## Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar este pipeline, por favor abre un **issue** o envía un **pull request**.

---

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## Autor
Desarrollado por **[Juan Cruz Oviedo]**.

