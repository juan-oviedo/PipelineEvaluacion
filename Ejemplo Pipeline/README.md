# Ejemplo Clasificación de Textos

Este ejemplo utiliza un pequeño dataset con textos en inglés. Se toman **10 textos** del dataset y se generan **3 paquetes de textos**, donde cada texto aparece **2 veces** en los paquetes.

---

## Archivos Incluidos

### 1. Copia de `Pipeline.ipynb`
Esta es una copia de la notebook del pipeline principal, adaptada para este ejemplo.

#### Cambios realizados:
- **Rellenado de campos necesarios:**
  ```python
  # Entrada
  apps_script_url = "https://script.google.com/macros/s/AKfycbyo9CLuK5nJYk3dIZDworpXKYPvRaA_sXDA8mcW4Ai3OBpKM9_qrXe0myUkhOOdZW-N/exec" # URL del Apps Script
  carpeta_con_datos = "Ejemplo Pipeline/Entradas/"
  nombre_de_archivo = "Textos.csv" # Archivo CSV
  plantillas_url = "https://docs.google.com/spreadsheets/d/1N8GQpIxZLjPYCJGrqpoymxqQsDoPjb-vQ621Tbcf13c/edit?usp=sharing" # Google Sheets

  # Salida
  carpeta_guardar_salidas = "Ejemplo Pipeline/Salidas/"
  nombre_formularios_archivo = "Ejemplo Formulario Pipeline"
  nombre_formularios = "Clasificación de textos"
  titulo_formularios = "Clasificación de textos en inglés"
  descripcion_formulario = "Este formulario forma parte de un ejemplo para el pipeline de evaluación de datos generados por I.A. (https://github.com/juan-oviedo/PipelineEvaluacion)"
  nombre_csv_con_formularios = "Links_de_formularios.csv" # Archivo CSV
  
  # Configuración del ejemplo
  cantidad_de_paquetes = 3
  cantidad_de_superposiciones = 2
  cantidad_de_datos_a_evaluar = 10
  seed = 23
  ```
  
### Modificación de Funciones

- **`3)Personalizacion y funciones, d) Orden de las Plantillas, funcion orden_plantillas`**: Ahora los títulos indican el número del texto, e.j., `Texto 3 de 7`.
- **`4)Pipeline seccion carga datos`**: Cambiada para utilizar la columna `text` del dataset.

---

## 2. Muestra Pipeline.json

Este archivo es una copia del proyecto Apps Script generado a partir del archivo `AppsScript.js` original.

---

## Estructura de Carpetas

### Carpeta `Entradas`
Contiene todos los archivos necesarios para ejecutar el pipeline:

- **`Textos.csv`**: Dataset pequeño con textos en inglés y sus clasificaciones.
- **`Copia de Plantillas base.xlsx`**: Plantilla utilizada para generar los formularios.  
  También está disponible en Google Sheets:  
  [Abrir en Google Sheets](https://docs.google.com/spreadsheets/d/1N8GQpIxZLjPYCJGrqpoymxqQsDoPjb-vQ621Tbcf13c/edit?usp=sharing)

### Carpeta `Salidas`
Contiene los archivos generados por el pipeline:

- **`Ejemplo Formulario Pipeline1.csv`**: Documento con toda la información organizada para rellenar los formularios.
- **`Clasificación de textos1 - Formularios de Google.pdf`**: Versión PDF de los formularios generados.  
  *(Nota: No existe un formato descargable de Google Forms, pero los formularios pueden visualizarse mediante los siguientes enlaces):*  
  - Formulario 1: [Abrir Formulario](https://docs.google.com/forms/d/e/1FAIpQLSfbh_Hh0NfIAcszWXEiK7Ge_mas523DR8HmjXVlKL_u6BGFWQ/viewform?usp=sharing)  
  - Formulario 2: [Abrir Formulario](https://docs.google.com/forms/d/e/1FAIpQLScmHnd1tYezOL3QU5DYyp7NGleguppm-alBUqw84N9Ttki1rQ/viewform?usp=sharing)  
  - Formulario 3: [Abrir Formulario](https://docs.google.com/forms/d/e/1FAIpQLSfv0s0cThUGi2GoXLKYnRvJnvcqmcziK1h5KapqiITR5o040A/viewform?usp=sharing)
- **`Links_de_formularios.csv`**: Archivo que contiene los enlaces a todos los formularios generados junto con su identificador.

---

## Notas

Este ejemplo demuestra cómo configurar y ejecutar el pipeline para casos específicos. Puedes usarlo como base para adaptar el pipeline a tus propios proyectos.

---

[Repositorio principal](https://github.com/juan-oviedo/PipelineEvaluacion)


