Práctica Inventario - Grupo GBD
Integrantes: Francisco Merchan, Denis Luque y Antonio Muñoz.

Notas sobre los cambios realizados
Hemos actualizado el proyecto siguiendo las indicaciones de la última revisión para cumplir con los requisitos de la práctica. Los cambios principales son:

Base de datos: hemos migrado de postgresql a sqlite para que el proyecto sea portable y no dependa de servidores externos.

Modelo de datos: hemos rehecho el sistema mediante Code First utilizando las migraciones de entity framework.

Gestión de imágenes: Se ha eliminado la carga por URL externa. Ahora el formulario permite subir archivos locales desde el equipo. Las fotos se guardan automáticamente en la carpeta wwwroot/images del servidor API.

Cómo ejecutar el proyecto
1. Backend (carpeta InventarioAPI)
No hace falta configurar nada de base de datos porque el archivo .db ya va incluido en la carpeta.

Abrir un terminal en la carpeta InventarioAPI.

Ejecutar el comando: dotnet run.

El servidor arrancará por defecto en: http://localhost:5055.

2. Frontend (Carpeta inventario-frontend)
Abrir una terminal en la carpeta del frontend.

Ejecutar npm install (solo si es la primera vez).

Lanzar la aplicación con: ng serve.

Abrir http://localhost:4200 en el navegador.

Detalles de la entrega
Hemos registrado 30 artículos con sus fotos correspondientes para cumplir con el mínimo del enunciado.

El buscador filtra correctamente por nombre sin distinguir entre mayúsculas o tildes.

El borrado de artículos solicita la confirmación al usuario antes de realizarse.

Hemos ajustado el css para que tanto el listado como el formulario tengan un diseño limpio y funcional.
