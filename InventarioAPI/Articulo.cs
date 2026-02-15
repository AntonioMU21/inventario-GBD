using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace InventarioAPI
{
    [Table("articulos")]
    public class Articulo
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("nombre")]
        public string Nombre { get; set; } = string.Empty;

        [Column("imagen")]
        public string Imagen { get; set; } = "https://via.placeholder.com/150";

        [Column("stock")]
        public int Stock { get; set; }
    }
}