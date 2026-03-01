Práctica Inventario

Grupo formado por:

Francisco Merchan
Denis Luque
Antonio Muñoz

Configuración de la Base de Datos

Para que funcione, primero hay que montar la base de datos en local:

1. Abrir pgAdmin4 y crear una base de datos que se llame inventario.
2. Ir a la carpeta Database del proyecto y abrir el archivo tabla.sql.
3. Copiar todo el código SQL y ejecutarlo en el Query Tool de la base de datos creada.

Configuración del Backend
El backend está en la carpeta InventarioAPI. Para que conecte con Postgres, hay que mirar el archivo appsettings.json:

Puerto: Hemos dejado el 5432 por defecto. Si en el ordenador usa el 5433, hay que cambiarlo ahí.
Contraseña: Cambiar la contraseña de Postgres (nosotros hemos puesto 123456 para las pruebas).

Para lanzarlo:
1. Abrir un terminal en la carpeta InventarioAPI.
2. Ejecutar: dotnet run.

Ejecución del Frontend
Está todo en la carpeta inventario-frontend. Pasos para arrancarlo:

1. Abrir terminal en esa carpeta.
2. Ejecutar "npm install" para descargar las librerías.
3. Ejecutar npm start para abrir la web en el navegador.

Notas sobre la entrega
1. El buscador filtra por nombre sin importar mayúsculas o tildes.
2. Al borrar un artículo, sale un aviso de confirmación.
3. El listado tiene 36 artículos con imagen, nombre y stock.
