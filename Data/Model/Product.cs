using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CoolCleanApp.Data.Model
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(150), Column(TypeName = "nvarchar(150)")]
        public string Product_id { get; set; }

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Main_id { get; set; }

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Min_name { get; set; }

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string ProductName { get; set; }

        public long? price { get; set; } = default(long?);


        [MaxLength(1000), Column(TypeName = "nvarchar(1000)")]
        public string Product_description { get; set; }

    }
}
