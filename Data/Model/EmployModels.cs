using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoolCleanApp.Data.Model
{
    public class EmployModels
    {
        [Key]

        public int Id { get; set; }

        [Column(TypeName ="nvarchar(50)")]
        public string EmployeeName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Occupation { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string ImageName { get; set; }

        [NotMapped]

        public IFormFile ImageFile { get; set; }

        //Pascal


    }
}
