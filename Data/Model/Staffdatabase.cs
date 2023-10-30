using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoolCleanApp.Data.Model
{
    public class Staffdatabase
    {
        [Key]
        public int ID { get; set; }

        [MaxLength(150), Column(TypeName = "nvarchar(150)")]

        public string Pass_id { get; set; }

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Main_id { get; set; }

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Min_name { get; set; }

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Name_staff { get; set; } = "Description";

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Description { get; set; } = "Description";

        public long? Phone { get; set; } = default(long?);


     
        

   

    }
}
