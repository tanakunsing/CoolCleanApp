using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Net;
using Microsoft.Identity.Client;

namespace CoolCleanApp.Data.Model
{
    public class Purchase
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(150), Column(TypeName = "nvarchar(150)")]
        public string Date { get; set; }

        [MaxLength(150), Column(TypeName = "nvarchar(150)")]
        public string Company_name { get; set; }

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Customer_name { get; set; }

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string TypeService { get; set; }

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public String House_number { get; set; }

        public long? Price { get; set; } = default(long?);

        public long? Phone { get; set; } = default(long?);

        [MaxLength(1000), Column(TypeName = "nvarchar(1000)")]
        public string Email { get; set; }


        [MaxLength(1000), Column(TypeName = "nvarchar(1000)")]
        public string Check_Email { get; set; }


        [MaxLength(1000), Column(TypeName = "nvarchar(1000)")]
        public string County { get; set; }


        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Subdistrict { get; set; }



        [MaxLength(300), Column(TypeName = "nvarchar(300)")]

        public string Province { get; set; }


        public long? Postal_code { get; set; } = default(long?);




        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Address_details { get; set; }


        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Status_text { get; set; }


        public bool? Is_active { get; set; }= default(bool?);


        public long? Id_product { get; set; } = default(long?);



    }
}
