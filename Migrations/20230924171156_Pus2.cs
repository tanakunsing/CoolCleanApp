using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CoolCleanApp.Migrations
{
    /// <inheritdoc />
    public partial class Pus2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Check_Email",
                table: "Purchase",
                type: "nvarchar(1000)",
                maxLength: 1000,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Purchase",
                type: "nvarchar(1000)",
                maxLength: 1000,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<long>(
                name: "Phone",
                table: "Purchase",
                type: "bigint",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Check_Email",
                table: "Purchase");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Purchase");

            migrationBuilder.DropColumn(
                name: "Phone",
                table: "Purchase");
        }
    }
}
