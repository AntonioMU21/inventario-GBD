# Práctica Inventario

**Integrantes:** Francisco Merchan, Denis Luque y Antonio Muñoz.

## Nota sobre los cambios que hemos realizado
Hemos actualizado el proyecto siguiendo las indicaciones de la última revisión para cumplir con los requisitos de la práctica. Los cambios principales son:

* **Base de datos:** hemos migrado de PostgreSQL a SQLite para que el proyecto sea portable y no dependa de servidores externos.
* **Modelo de datos:** hemos rehecho el sistema mediante code first utilizando las migraciones de entity framework.
* **Gestión de imágenes:** hemos eliminado la carga por url externa. Ahora el formulario permite subir archivos locales desde el equipo. Las fotos se guardan automáticamente en la carpeta `wwwroot/images` del servidor API.

## Cómo ejecutar el proyecto

### Backend (carpeta InventarioAPI)
No hace falta configurar nada de base de datos porque el archivo `.db` ya va incluido en la carpeta.

1. Abrir en una terminal en la carpeta `InventarioAPI`.
2. Ejecutar el comando: `dotnet run`.
3. El servidor arrancará por defecto en: `http://localhost:5055`.

### Frontend (carpeta inventario-frontend)
1. Abrir una terminal en la carpeta del frontend.
2. Ejecutar `npm install` (solo si es la primera vez).
3. Lanzar la aplicación con el comando: `ng serve -o` (esto compilará el proyecto y abrirá la web automáticamente en el navegador).

## Detalles de la entrega
* Hemos registrado 30 artículos con sus fotos correspondientes para cumplir con el mínimo del enunciado.
* El buscador filtra correctamente por nombre sin distinguir entre mayúsculas o tildes.
* El borrado de artículos solicita la confirmación al usuario antes de realizarse.
* Hemos ajustado el CSS para que tanto el listado como el formulario tengan un diseño limpio y funcional.
