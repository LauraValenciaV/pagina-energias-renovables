# pagina-energias-renovables
Página web sobre energías renovables en Colombia.

INFORME: PÁGINA WEB ENERGÍAS RENOVABLESTALENTO TECH Programación nivel explorador Misión 2


Integrantes grupo 5:					
Laura Valencia 
David Esteban Carvajal 
Laura De La Hoz 
Sara Alvarado Durán 


Github
https://github.com/LauraValenciaV/pagina-energias-renovables



Descripción breve:
Este proyecto web busca informar y concientizar sobre el estado y la evolución del uso de energías renovables en el mundo, mediante visualizaciones interactivas, datos históricos y herramientas de cálculo personal.

⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ Nota importante: ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️
Este proyecto está configurado para ejecutarse en un entorno de desarrollo.
Antes de usarlo, asegúrate de ejecutar primero el archivo app.py para levantar el servidor local.
Luego, puedes recorrer la interfaz utilizando Live Server o accediendo a http://localhost:5000 (o el puerto indicado).
No está listo para producción. No usar en servidores reales sin configuraciones adicionales (por ejemplo, WSGI con Gunicorn o uWSGI).



🌱 Introducción
El cambio climático, la crisis energética y la necesidad de modelos sostenibles han convertido a las energías renovables en una prioridad global. Este proyecto propone una página web educativa e interactiva que permita a los usuarios explorar datos históricos sobre la generación de energía renovable, conocer las diferentes fuentes existentes, visualizar comparaciones y realizar cálculos personalizados para entender mejor su consumo energético.
Además de informar, el objetivo principal es motivar a la población a interesarse más por las energías limpias, comprender cómo se producen y reflexionar sobre el impacto positivo que tendría una transición progresiva desde las fuentes contaminantes hacia alternativas sostenibles. Con un mayor conocimiento sobre estos temas, se abre la posibilidad de plantear nuevos proyectos, fomentar hábitos de consumo más conscientes y promover la medición del gasto energético.
El proyecto también busca inspirar a las nuevas generaciones a imaginar y construir un futuro donde las energías renovables sean la fuente principal de abastecimiento, impulsando así una sociedad más justa, limpia y sostenible.

🛠 Desarrollo del Proyecto
La página web está estructurada en cinco secciones principales, accesibles desde una barra de navegación fija, presente en todas las pestañas para facilitar la experiencia del usuario. Además, cuenta con un footer informativo con créditos y enlaces relevantes.
Inicio (Home)
Esta sección da la bienvenida al usuario e introduce de forma general el propósito del proyecto, resaltando la importancia de las energías renovables y la necesidad de adoptar fuentes sostenibles.


Calculadora Energética
Herramienta interactiva que permite al usuario estimar su consumo energético anual. A partir de esos datos, la calculadora muestra qué porcentaje de esa energía podría cubrirse con la producción renovable de diferentes países. Esta funcionalidad busca ofrecer una experiencia personalizada y educativa sobre el impacto individual del consumo energético.


Dashboard de Visualización de Datos
Sección interactiva con gráficos dinámicos que permiten explorar diferentes aspectos de la generación y consumo de energías renovables:


Gráfico de Barras: Muestra la producción por fuente renovable (eólica, solar, hidroeléctrica, biocombustibles, geotérmica).


Gráfico de Torta: Representa la participación porcentual de cada fuente en el consumo eléctrico total.


Gráfico de Líneas: Visualiza la evolución histórica de la capacidad instalada de las distintas fuentes.


Gráfico de Área: Compara el consumo de energía renovable con el de fuentes convencionales a lo largo del tiempo.


Producción Histórica por País o Continente
El usuario puede seleccionar un país o continente y visualizar la generación histórica de energía limpia desde 1965 hasta 2021. Esta sección permite comprender cómo ha evolucionado el uso de fuentes renovables en distintas regiones del mundo.


Tipos de Energía Renovable
Sección educativa que explica con detalle las cinco principales fuentes de energía limpia: solar, eólica, hidroeléctrica, biocombustibles y geotérmica. Incluye descripciones, ejemplos visuales y videos explicativos para facilitar la comprensión, incluso a usuarios sin conocimientos técnicos.

🎯 Resultados Esperados
Este proyecto busca que los usuarios:
Comprendan mejor la magnitud y el impacto del consumo energético global.


Se familiaricen con los distintos tipos de energías renovables.


Exploren de forma visual e interactiva cómo ha cambiado la producción de energías limpias a lo largo del tiempo.


Reflexionen sobre su propio consumo energético en relación con el contexto global.


Tengan una herramienta accesible para la educación ambiental y energética.

⚙️ Aspectos Técnicos y Funcionamiento
El proyecto fue desarrollado utilizando una arquitectura web que permite la visualización dinámica de datos mediante diversas herramientas.
En el backend, se creó un servidor con Flask en Python, encargado de leer, interpretar y exponer la información contenida en archivos .csv. Estos datos se transforman y se sirven en formato JSON mediante servicios creados también en Python.
Para que el sistema funcione correctamente, es necesario instalar las siguientes librerías en Python:

    flask

    flask_cors

    pandas

    chart.js

    os (incluida en la biblioteca estándar)


En el frontend, se implementaron servicios en JavaScript que realizan llamadas al servidor para consumir los datos. Estos se convierten en visualizaciones interactivas utilizando HTML, CSS y JS, brindando al usuario una experiencia fluida, educativa y con navegación intuitiva.
Además, se utilizó Bootstrap para facilitar la integración de videos en la página web sin que se abran en una pestaña nueva o desajusten el diseño del sitio.
