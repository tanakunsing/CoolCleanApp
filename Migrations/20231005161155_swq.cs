using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CoolCleanApp.Migrations
{
    /// <inheritdoc />
    public partial class swq : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CearteDateTime",
                table: "Staffdatabase");

            migrationBuilder.DropColumn(
                name: "Deleted",
                table: "Staffdatabase");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Staffdatabase",
                newName: "Pass_id");

            migrationBuilder.AddColumn<string>(
                name: "Main_id",
                table: "Staffdatabase",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Main_id",
                table: "Staffdatabase");

            migrationBuilder.RenameColumn(
                name: "Pass_id",
                table: "Staffdatabase",
                newName: "Title");

            migrationBuilder.AddColumn<DateTime>(
                name: "CearteDateTime",
                table: "Staffdatabase",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "Deleted",
                table: "Staffdatabase",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
