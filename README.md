# SmartHomeHub

SmartHomeHub es una plataforma para gestionar dispositivos del hogar inteligente. Esta aplicación está construida con JavaScript y Node.js, utilizando Express para el backend.

## Instalación

1. Clona este repositorio: `git clone https://github.com/brugyto/SmartHomeHub.git`
2. Ingresa al directorio del proyecto: `cd SmartHomeHub`
3. Instala las dependencias: `npm install`

## Uso

Para ejecutar la aplicación, utiliza el siguiente comando:

```bash
npm start
Esto iniciará el servidor en http://localhost:3000.

Endpoints API
GET /devices: Obtiene la lista de todos los dispositivos.

GET /devices/:deviceId: Obtiene un dispositivo por su ID.

POST /devices: Crea un nuevo dispositivo.

PUT /devices/:deviceId: Actualiza un dispositivo por su ID.

DELETE /devices/:deviceId: Elimina un dispositivo por su ID.

GET /users: Obtiene la lista de todos los usuarios.

GET /users/:userId: Obtiene un usuario por su ID.

POST /users: Crea un nuevo usuario.

PUT /users/:userId: Actualiza un usuario por su ID.

DELETE /users/:userId: Elimina un usuario por su ID.

Contribuciones
Si deseas contribuir a SmartHomeHub, por favor sigue los pasos:

Haz un fork del repositorio.
Crea una nueva rama para tus cambios: git checkout -b feature/nueva-funcionalidad
Realiza tus cambios y haz commit: git commit -m 'Añade nueva funcionalidad'
Sube tus cambios a tu fork: git push origin feature/nueva-funcionalidad
Crea un pull request en el repositorio original.
Licencia
Este proyecto está bajo la Licencia MIT - mira el archivo LICENSE para más detalles.
