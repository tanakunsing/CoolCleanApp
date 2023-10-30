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
    public class Member_APIController : ControllerBase
    {
        private readonly CoolDbContext _context;

        public Member_APIController(CoolDbContext context)
        {
            _context = context;
        }

        // GET: api/Member_API
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Member_pr1>>> GetMember_pr1()
        {
          if (_context.Member_pr1 == null)
          {
              return NotFound();
          }
            return await _context.Member_pr1.ToListAsync();
        }

        // GET: api/Member_API/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Member_pr1>> GetMember_pr1(int id)
        {
          if (_context.Member_pr1 == null)
          {
              return NotFound();
          }
            var member_pr1 = await _context.Member_pr1.FindAsync(id);

            if (member_pr1 == null)
            {
                return NotFound();
            }

            return member_pr1;
        }

        // PUT: api/Member_API/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMember_pr1(int id, Member_pr1 member_pr1)
        {
            if (id != member_pr1.Id)
            {
               
            }

            _context.Entry(member_pr1).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Member_pr1Exists(id))
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

        // POST: api/Member_API
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Member_pr1>> PostMember_pr1(Member_pr1 member_pr1)
        {
          if (_context.Member_pr1 == null)
          {
              return Problem("Entity set 'CoolDbContext.Member_pr1'  is null.");
          }
            _context.Member_pr1.Add(member_pr1);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMember_pr1", new { id = member_pr1.Id }, member_pr1);
        }

        // DELETE: api/Member_API/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMember_pr1(int id)
        {
            if (_context.Member_pr1 == null)
            {
                return NotFound();
            }
            var member_pr1 = await _context.Member_pr1.FindAsync(id);
            if (member_pr1 == null)
            {
                return NotFound();
            }

            _context.Member_pr1.Remove(member_pr1);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Member_pr1Exists(int id)
        {
            return (_context.Member_pr1?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }


}
