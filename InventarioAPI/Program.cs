using Microsoft.EntityFrameworkCore;
using InventarioAPI; // ESTA LÍNEA ES LA QUE TE DABA EL ERROR

var builder = WebApplication.CreateBuilder(args);

// 1. Configurar el Contexto de Base de Datos (SQLite)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("CadenaConexion")));

// 2. Habilitar Controladores
builder.Services.AddControllers();

// 3. Configurar CORS para Angular
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirAngular", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// 4. Usar la política de CORS
app.UseCors("PermitirAngular");

// 5. Habilitar archivos estáticos para las imágenes
app.UseStaticFiles(); 

// 6. Mapear las rutas
app.MapControllers();

app.Run();