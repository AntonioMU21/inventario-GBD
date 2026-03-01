Práctica Inventario

Grupo formado por:
Francisco Merchan
Denis Luque
Antonio Muñoz


Cambios realizados:

Base de datos:Se ha migrado de postgresql a sqlite para facilitar la portabilidad.
Arquitectura: Implementación mediante entity framework code first con sistema de migraciones.
Gestión de Imágenes: Las imágenes ya no se cargan por URL externa. Ahora se suben archivos locales desde el equipo, los cuales se almacenan en la carpeta física wwwroot/images del servidor.


Ejecución del Backend (.NET)

El backend se encuentra en la carpeta InventarioAPI. Al usar SQLite, no es necesaria ninguna configuración de usuario o contraseña.
Abrir terminal en InventarioAPI.
Ejecutar: dotnet run. El servidor escuchará en http://localhost:5055


Ejecución del Frontend (Angular)

Ubicado en la carpeta inventario-frontend.
Abrir terminal en esa carpeta.
Ejecutar npm install (solo la primera vez).
Ejecutar ng serve -o para arrancar la aplicación en http://localhost:4200.


Notas de la Entrega

Buscador: Filtra por nombre sin distinguir mayúsculas, minúsculas ni tildes.
Confirmación: El borrado de artículos solicita confirmación previa.
Contenido: El listado incluye 30 artículos con sus respectivas imágenes subidas localmente.
