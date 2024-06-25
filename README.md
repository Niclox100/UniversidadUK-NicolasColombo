### Prueba tecnica de Nicolas Colombo para UniversidadUK


# Pasos necesarios para levantar el proyecto

1. Instalar Docker

  Se usa docker para ejecutar la imagen de Mongo y para levantar un cliente llamado "mongo-express", en el cual
  se va a poder visualizar el contenido de la base de datos sin necesidad de instalar un cliente externo.

2. Correr el comando "npm install" para instalar todas las dependencias necesarias.

3. Crear un archivo .env con el siguiente contenido

  MONGO_INITDB_ROOT_USERNAME= mongoadmin
  MONGO_INITDB_ROOT_PASSWORD= mongoadmin

  MONGO_DB=universidadUK-db
  MONGO_PORT=27017
  MONGO_HOST=localhost
  MONGO_CONNECTION=mongodb

4. Ejecutar el comando docker compose up -d

5. Ejecutar el comando "npm run start:dev"

# Pasos para visualizar el cliente web

1. Entrar a la ruta http://localhost:28081

2. Colocar el usuario y contraseña

  user: admin
  password: password

3. Una vez se entra al cliente, hacer click en el boton "View" en la coleccion "UniversidadUK-db"

4. Hacer click nuevamente en el boton "View"

5. Ya se va a poder visualizar las colecciones agregadas, en este caso la de "users"

