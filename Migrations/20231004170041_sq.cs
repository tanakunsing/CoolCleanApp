using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CoolCleanApp.Migrations
{
    /// <inheritdoc />
    public partial class sq : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageName",
                table: "Member_pr1",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageName",
                table: "Member_pr1");
        }
    }
}
