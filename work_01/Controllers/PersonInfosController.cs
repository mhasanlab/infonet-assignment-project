using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using work_01.Models;

namespace work_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonInfosController : ControllerBase
    {
        private readonly PersonDbContext _context;
        private readonly IWebHostEnvironment env;
        public PersonInfosController(PersonDbContext context, IWebHostEnvironment env) 
        {
            _context = context;
            this.env = env;
        }
        // GET: api/PersonInfos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PersonalInfo>>> GetPersons()
        {
            return await _context.PersonalInfos.ToListAsync();
        }

        // GET api/PersonInfos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PersonalInfo>> GetPerson(int id)
        {
            var person = await _context.PersonalInfos.FindAsync(id);
            if (person == null) 
            {
                return NotFound();
            }
            return person;
        }

        // POST api/PersonInfos
        [HttpPost]
        public async Task<ActionResult<PersonalInfo>> PostPerson(PersonalInfo info)
        {
            _context.Add(info);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetPerson", new { id=info.PersonalInfoId},info);
        }

        // PUT api/PersonInfos/5
        [HttpPut("{id}")]
        public async Task<ActionResult<PersonalInfo>> PutPerson(int id, PersonalInfo info)
        {
            if (id != info.PersonalInfoId) 
            {
                return BadRequest();
            }
            _context.Entry(info).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonInfosExit(id))
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

        // DELETE api/PersonInfos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PersonalInfo>> DeletePerson(int id)
        {
            var person = await _context.PersonalInfos.FindAsync(id);
            if (person == null) 
            {
                return NotFound();
            }
            _context.PersonalInfos.Remove(person);
            await _context.SaveChangesAsync();
            return person;
        }
        private bool PersonInfosExit(int id) 
        {
            return _context.PersonalInfos.Any(x=>x.PersonalInfoId==id);
        }

        [HttpPost("Uploads/{id}")]
        public async Task<ActionResult<ResumeUpload>> PostImage(int id, IFormFile file)
        {
            var person = await _context.PersonalInfos.FindAsync(id);
            if (person == null)
            {
                return NotFound();
            }
            try
            {
                string ext = Path.GetExtension(file.FileName);
                string f = Guid.NewGuid() + ext;
                if (!Directory.Exists(env.WebRootPath + "\\Uploads\\"))
                {
                    Directory.CreateDirectory(env.WebRootPath + "\\Uploads\\");
                }
                using FileStream fileStream = System.IO.File.Create(env.WebRootPath + "\\Uploads\\" + f);
                file.CopyTo(fileStream);
                fileStream.Flush();
                person.ResumeUpload = f;
                fileStream.Close();
                await _context.SaveChangesAsync();
                return new ResumeUpload { Upload = f };
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
