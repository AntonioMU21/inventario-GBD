using Microsoft.EntityFrameworkCore;

namespace InventarioAPI
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // Esto conecta con la tabla 'articulos' que creamos en SQL
        public DbSet<Articulo> Articulos { get; set; }
    }
}