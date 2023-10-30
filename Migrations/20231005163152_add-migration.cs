using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CoolCleanApp.Migrations
{
    /// <inheritdoc />
    public partial class addmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "Staffdatabase");

            migrationBuilder.AddColumn<string>(
                name: "Name_staff",
                table: "Staffdatabase",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<long>(
                name: "Phone",
                table: "Staffdatabase",
                type: "bigint",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name_staff",
                table: "Staffdatabase");

            migrationBuilder.DropColumn(
                name: "Phone",
                table: "Staffdatabase");

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Staffdatabase",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
