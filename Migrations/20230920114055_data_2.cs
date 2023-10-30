using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CoolCleanApp.Migrations
{
    /// <inheritdoc />
    public partial class data_2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Member_pr1",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Main_id = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Min_name = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Max_name = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Phonenumber = table.Column<int>(type: "int", nullable: false),
                    Max_Address = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Min_Address = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Member_pr1", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Member_pr1");
        }
    }
}
