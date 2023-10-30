using CoolCleanApp.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;
using System.Globalization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddDbContext<CoolDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddHttpContextAccessor();
var allowedOrigins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>();

builder.Services.AddCors(p => p.AddPolicy("corsapp", options =>
{
    options.WithOrigins("http://localhost:3000/")
    .WithMethods("POST", "GET", "PUT", "DELETE").WithHeaders(HeaderNames.ContentType);
    
    options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
}));
builder.Services.Configure<RequestLocalizationOptions>(options =>
{
    options.DefaultRequestCulture = new Microsoft.AspNetCore.Localization.RequestCulture("en-GB");
    options.SupportedCultures = new List<CultureInfo> { new CultureInfo("en-GB") };
    options.RequestCultureProviders.Clear();
});

builder.Services.AddControllers();


builder.Services.AddCors();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("corsapp");
app.UseCors(options=> options.WithOrigins("http://localhost:3001")
.AllowAnyMethod()
.AllowAnyHeader()
);


app.UseAuthorization();

app.MapControllers();

app.Run();
