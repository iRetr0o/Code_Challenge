# Code_Challenge
Creación de una API de los estudiantes de VIsual Partner Ship.

## ¿Cómo instalar las dependencias?
Una vez que ya le diste `fork` o descargaste el repositorio utilizas el comando `npm install` en tu terminal o linea de comandos para instalar las dependencias que se utilizaron para este proyecto.

### Comandos:
- `npm test 'ruta-del-archivo'`: Nos permite comprobar el estado de la prueba de nuestro archivo .test.js.
- `npm run linter`: Muestra los errores de sintaxis que tienen los diferentes archivos.
- `npm run linter-fix`: Corrige los errores de sintaxis que tenemos en nuestros archivos.
- `npm run server`: Pone en marcha nuestro servidor para consultar las diferentes rutas.

## Dependencias
Las dependencias utilizadas para este proyecto son:

| Nombre  | Versión | Documentación | 
| :------------: | :------------: | :------------: |
| Node | 16.14.2 | <a href="https://nodejs.org/docs/latest-v16.x/api/index.html" target="_blank"><img src="https://img.shields.io/badge/🔗 Node-Documentation-green?style=for-the-badge"></a> |
| Jest | 27.5.1  | <a href="https://jestjs.io/docs/27.x/getting-started" target="_blank"><img src="https://img.shields.io/badge/Jest-Documentation-brightgreen?style=for-the-badge&logo=jest"></a> |
| Express | 4.18.1 | <a href="https://expressjs.com/en/4x/api.html" target="_blank"><img src="https://img.shields.io/badge/Express-Documentation-lightgray?style=for-the-badge&logo=express"></a> |
| ESLint | 8.14.0 | <a href="https://expressjs.com/en/4x/api.html" target="_blank"><img src="https://img.shields.io/badge/ESLint-Documentation-purple?style=for-the-badge&logo=ESLint"></a> |
- **Node**: Se utilizo la versión mas estable que en ese momento era la 16.14.2, actualmente ya esta disponible la 16.15.0.
- **Jest**: La versión más actual no es compatible con el workflow de GitHub Actions, por lo que se optó usar la version 27.5.1.
- **Express**: Las versiones anteriores express las considera obsoletas por lo que es necesario usar la más actual.
- **ESLint**: La versión más reciente tiene funcionalidades para mejor formateo de código.


## Componetes
```mermaid
graph TD;
    Reader-->StudentService;
    StudentService-->StudentController
    StudentController-->Server
```
+ **Reader:** Se encarga de leer un archvio y analizarlo como JSON, transformando el valor producido por el análisis.
+ **StudentService:** Almacena todas las funciones o metodos necesarios para realizar los requerimientos (Regresar una lista, filtrar por certificado, filtrar por creditos).
+ **StudentController:** Llama a los metodos que utiliza el *StudenService* para aplicarlos a la base de datos del *Reader*.
+ **Server:** Nos ayuda a exponer e interconectar nuestra aplicación.

## ¿Cómo funciona esta API?
Una API (interfaz de programación de aplicaciones) es un contrato que permite a los desarrolladores interactuar con una aplicación a través de un conjunto de interfaces. En este caso, la aplicación es una base de datos de objetos de estudiates de VIsual Partner Ship y cada uno contiene:
- Nombre
- ID
- Email
- Creditos
- Inscripciones
- Cursos previos
- Certificación

Las rutas que podemos consultar una vez activamos el server podemos verlas en el archivo [server.js](https://github.com/iRetr0o/Code_Challenge/blob/main/lib/server.js).

Una vez activamos el servidor con el comando `npm run server` en la consola nos mostrara el puerto en el que esta corriendo que en este caso es el puerto `3000`, con esto podremos entrar a la ruta `localhost:3000` y nos mostrara un pequeño mensaje de que ya esta activado.
#### Ruta para consultar todos los estudiantes
`localhost:3000/v1/students`

Nos regresa todos los estudiantes que se encuentran en la base de datos:
<img src="./images/Students.png">

#### Ruta para consultar los emails de los estudiantes que tienen certificado
`localhost:3000/v1/students/emails`

Nos regresa una lista de emails de aquellos estudiantes que en apartado de 'credits' tienen el valor de `true`:
<img src="./images/Emails.png">

#### Ruta para consultar los estudiantes que tienen más de 500 creditos
`localhost:3000/v1/students/credits`

Nos regresa los estudiantes que en el apartado de 'credits' tienen mas 500:
<img src="./images/Creditos.png">

En resumen este reposirotiro funciona de la siguiente manera:
<img src="https://user-images.githubusercontent.com/17634377/165870375-fe5a730a-eada-4abe-ac9c-42334e003b18.png" alt="Resumen de la practica">
Imagen realizada por: **@visualpartnetship (@carlogilmar)**
