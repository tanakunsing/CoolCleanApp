using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoolCleanApp.Data.Model
{
    public class Member_pr1
    {
        [Key]
        public int Id { get; set; } 

        [MaxLength(150), Column(TypeName = "nvarchar(150)")]
        public string Main_id { get; set; }
        

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Min_name { get; set; }

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Max_name { get; set;}

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string house_number { get; set; }

        public long? Phonenumber { get; set;} = default(long?);


        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Email { get; set; }

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Check_email { get; set; }


        [MaxLength(500), Column(TypeName = "nvarchar(500)")]
        public string Min_Address { get; set; }

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Subdistrict { get; set; }

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Province { get; set; }

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Postal_code { get; set; }

        [MaxLength(500), Column(TypeName = "nvarchar(500)")]
        public string Min_Description { get; set; }


        [MaxLength(100), Column(TypeName = "nvarchar(500)")]
        public string Status_text { get; set; }

        
        public bool? Is_active { get; set; } = default(bool?);

        public long? TotalWallet { get; set; } = default(long?);

        public long? Job_count { get; set; } = default(long?);
















    }
}
