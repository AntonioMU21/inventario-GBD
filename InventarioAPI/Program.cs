using InventarioAPI;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// --- CONFIGURACIÓN DE LA BASE DE DATOS ---
// Ahora lee la configuración del archivo appsettings.json de forma profesional.
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("CadenaConexion")));

// --- CONFIGURACIÓN DE CORS ---
// Permite que Angular se comunique con esta API
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirAngular", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configuración para el entorno de desarrollo (Swagger)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Activamos la política de CORS definida arriba
app.UseCors("PermitirAngular");

app.MapControllers();

app.Run();