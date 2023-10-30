using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace CoolCleanApp.Data.Model
{
    public class Uploadimgae
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(150), Column(TypeName = "nvarchar(150)")]
        public string Pass_Name { get; set; }

        [MaxLength(150), Column(TypeName = "nvarchar(150)")]
        public string NameTitle { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string Imagename { get; set; }




    }
}
