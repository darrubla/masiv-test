# Masiv Test - Daniel Arrubla

## Ejecución

**online**

- Para probar la solución dirigirse a este link: [Masiv](https://darrubla.github.io/masiv-test/dist/)

**Local**

1. git clone https://darrubla.github.io/masiv-test
2. Acceder a la carpeta del proyecto
3. `npm install`
4. `npm start`
5. si no abre solo el navegador, acceder a http://localhost:3000/

### Construcción

- Inicié utilizando como base un proyecto en el que ya había previamente trabajado utilizando Webpack, Sass y React. Para ello realicé las respectivas correcciones en el package.json y el webpack.config.js en cuestión de puertos y comandos de ejecución de scripts.
- Luego procedí a diseñar los componentes utilizando funciones, y una función para crear la url de consumo del api de los comics https://xkcd.com/${id}/info.0.json.
- Utilicé Grid y Flex para el layout principal y el container de los cards y le agregué algunos estilos con Sass a los componentes para darle un toque final.

### Bloqueos/Inconvenientes

- El Principal inconveniente lo tuve al momento de realizar la consulta, dado que el server del API me arrojaba un bloqueo por CORS.
- Lo anterior lo solucioné agregando el prefijo https://cors-anywhere.herokuapp.com/ a la url de consulta para saltar dicho bloqueo, este es uno de los métodos más comunes a la fecha para solucionar este inconveniente.

### Tech

Tecnologías usadas en el proyecto:

- [ReactJS] - Nucleo del proyecto.
- [Visual Studio Code] - Editor de texto, recomendado y preferido por el desarrollador.
- [Dillinger] - Herramienta para creación y visualización online de archivos Markdown.
- [Sass] - Preprocesador de CSS.
- [Webpack] - Empaquetador de modulos y gestor de dependencias.
- [stars-rating] - de npm para el manejo del rating.
- [axios] - Para el manejo de los http Request.

### Author

- **Daniel Arrubla** - [darrubla](https://github.com/darrubla) 😎

## Licencia

MIT
