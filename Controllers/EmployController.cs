using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoolCleanApp.Data;
using CoolCleanApp.Data.Model;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace CoolCleanApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployController : ControllerBase
    {
        private readonly CoolDbContext _context;
        private readonly IWebHostEnvironment _hostEmvironment;

        public EmployController(CoolDbContext context,IWebHostEnvironment hostEmvironment)
        {
            _context = context;
            this._hostEmvironment = hostEmvironment;
        }

        // GET: api/Employ
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployModels>>> GetEmployees()
        {
          if (_context.Employees == null)
          {
              return NotFound();
          }
            return await _context.Employees.ToListAsync();
        }

        // GET: api/Employ/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployModels>> GetEmployModels(int id)
        {
          if (_context.Employees == null)
          {
              return NotFound();
          }
            var employModels = await _context.Employees.FindAsync(id);

            if (employModels == null)
            {
                return NotFound();
            }

            return employModels;
        }

        // PUT: api/Employ/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployModels(int id, EmployModels employModels)
        {
            if (id != employModels.Id)
            {
                return BadRequest();
            }

            _context.Entry(employModels).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployModelsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Employ
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmployModels>> PostEmployModels([FromForm]EmployModels employModels)
        {
            employModels.ImageName = await SaveImage(employModels.ImageFile);

            _context.Employees.Add(employModels);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // DELETE: api/Employ/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployModels(int id)
        {
            if (_context.Employees == null)
            {
                return NotFound();
            }
            var employModels = await _context.Employees.FindAsync(id);
            if (employModels == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employModels);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployModelsExists(int id)
        {
            return (_context.Employees?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new string(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ','-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEmvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
         }
    }
}
