using Microsoft.EntityFrameworkCore;

namespace InventarioAPI
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Articulo> Articulos { get; set; }
    }
}
