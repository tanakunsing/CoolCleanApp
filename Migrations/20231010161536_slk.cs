using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CoolCleanApp.Migrations
{
    /// <inheritdoc />
    public partial class slk : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Min_name",
                table: "Staffdatabase",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Min_name",
                table: "Product",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Min_name",
                table: "Staffdatabase");

            migrationBuilder.DropColumn(
                name: "Min_name",
                table: "Product");
        }
    }
}
