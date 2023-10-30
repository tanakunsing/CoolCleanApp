using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoolCleanApp.Data;
using CoolCleanApp.Data.Model;

namespace CoolCleanApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffdatabasesController : ControllerBase
    {
        private readonly CoolDbContext _context;

        public StaffdatabasesController(CoolDbContext context)
        {
            _context = context;
        }

        // GET: api/Staffdatabases
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Staffdatabase>>> GetStaffdatabase()
        {
          if (_context.Staffdatabase == null)
          {
              return NotFound();
          }
            return await _context.Staffdatabase.ToListAsync();
        }

        // GET: api/Staffdatabases/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Staffdatabase>> GetStaffdatabase(int id)
        {
          if (_context.Staffdatabase == null)
          {
              return NotFound();
          }
            var staffdatabase = await _context.Staffdatabase.FindAsync(id);

            if (staffdatabase == null)
            {
                return NotFound();
            }

            return staffdatabase;
        }

        // PUT: api/Staffdatabases/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStaffdatabase(int id, Staffdatabase staffdatabase)
        {
            if (id != staffdatabase.ID)
            {
                return BadRequest();
            }

            _context.Entry(staffdatabase).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StaffdatabaseExists(id))
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

        // POST: api/Staffdatabases
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Staffdatabase>> PostStaffdatabase(Staffdatabase staffdatabase)
        {
          if (_context.Staffdatabase == null)
          {
              return Problem("Entity set 'CoolDbContext.Staffdatabase'  is null.");
          }
            _context.Staffdatabase.Add(staffdatabase);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStaffdatabase", new { id = staffdatabase.ID }, staffdatabase);
        }

        // DELETE: api/Staffdatabases/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStaffdatabase(int id)
        {
            if (_context.Staffdatabase == null)
            {
                return NotFound();
            }
            var staffdatabase = await _context.Staffdatabase.FindAsync(id);
            if (staffdatabase == null)
            {
                return NotFound();
            }

            _context.Staffdatabase.Remove(staffdatabase);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StaffdatabaseExists(int id)
        {
            return (_context.Staffdatabase?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
