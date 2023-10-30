using CoolCleanApp.Data.Model;
using Microsoft.EntityFrameworkCore;


using System.Data;

namespace CoolCleanApp.Data
{
    public class CoolDbContext : DbContext
    {
       public CoolDbContext(DbContextOptions<CoolDbContext> options) : base(options) { }
        
        public DbSet<Staffdatabase> Staffdatabase { get; set; }

        public DbSet<Member_pr1> Member_pr1 { get; set;}

        public DbSet<Product> Product { get; set; }

        public DbSet<Purchase> Purchase { get; set; }

        public DbSet<Uploadimgae> Images { get; set; }

        public DbSet<EmployModels> Employees { get; set; }


    }
}
