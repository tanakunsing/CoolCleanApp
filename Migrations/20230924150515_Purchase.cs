using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CoolCleanApp.Migrations
{
    /// <inheritdoc />
    public partial class Purchase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Purchase",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Company_name = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Customer_name = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    House_number = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: true),
                    Price = table.Column<long>(type: "bigint", nullable: true),
                    County = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    Subdistrict = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Province = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Postal_code = table.Column<long>(type: "bigint", nullable: true),
                    Address_details = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Status_text = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Is_active = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Purchase", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Purchase");
        }
    }
}
