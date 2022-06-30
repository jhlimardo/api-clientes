# api-clientes
Prueba Técnica Grupo EDB

URL: http://apiedb.joselimardo.com/

### Tecnologías utilizadas:

#### Backend:

NodeJs | Express | Sequelize | JavaScript

#### Base de Datos:

MySQL

#### Frontend:

React | Axios | JavaScript

##### Endpoints:

- Get: http://localhost:3001/clients | https://edb.joselimardo.com/clients
- Get by Id: http://localhost:3001/clients/:id | https://edb.joselimardo.com/clients/:id
- Post: http://localhost:3001/clients | https://edb.joselimardo.com/clients
- Delete: http://localhost:3001/clients/:id | https://edb.joselimardo.com/clients/:id
- Patch: http://localhost:3001/clients/:id | https://edb.joselimardo.com/clients/:id

##### Notas:

- Es un CRUD básico de clientes con formulario controlado en React (sin validaciones)

- Para correlo localmente:
- - Clonar el repositorio
- - Crear MySQL DB, el modelo se encuentra en el repositorio con el nombre de clientes.sql
- - realizar "npm i"  dentro de las carpetas /api y /client
- - npm start en c/u de las carpetas

- Por un tema lógico de tiempo he utilizado Bootstrap en la UI para los estilos (de manera básica)

##### Deploy:

He hecho el deploy en un servicio de Hosting personal.




