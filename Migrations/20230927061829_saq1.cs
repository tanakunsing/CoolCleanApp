using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CoolCleanApp.Migrations
{
    /// <inheritdoc />
    public partial class saq1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Member_pr1");

            migrationBuilder.RenameColumn(
                name: "Max_Address",
                table: "Member_pr1",
                newName: "house_number");

            migrationBuilder.AlterColumn<string>(
                name: "Min_Address",
                table: "Member_pr1",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(300)",
                oldMaxLength: 300);

            migrationBuilder.AddColumn<string>(
                name: "Check_email",
                table: "Member_pr1",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Member_pr1",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "Is_active",
                table: "Member_pr1",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Postal_code",
                table: "Member_pr1",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Province",
                table: "Member_pr1",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Status_text",
                table: "Member_pr1",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Subdistrict",
                table: "Member_pr1",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Check_email",
                table: "Member_pr1");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Member_pr1");

            migrationBuilder.DropColumn(
                name: "Is_active",
                table: "Member_pr1");

            migrationBuilder.DropColumn(
                name: "Postal_code",
                table: "Member_pr1");

            migrationBuilder.DropColumn(
                name: "Province",
                table: "Member_pr1");

            migrationBuilder.DropColumn(
                name: "Status_text",
                table: "Member_pr1");

            migrationBuilder.DropColumn(
                name: "Subdistrict",
                table: "Member_pr1");

            migrationBuilder.RenameColumn(
                name: "house_number",
                table: "Member_pr1",
                newName: "Max_Address");

            migrationBuilder.AlterColumn<string>(
                name: "Min_Address",
                table: "Member_pr1",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(500)",
                oldMaxLength: 500);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Member_pr1",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: false,
                defaultValue: "");
        }
    }
}
