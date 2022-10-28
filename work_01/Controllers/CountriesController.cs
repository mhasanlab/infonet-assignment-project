using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using work_01.Models;

namespace work_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        private readonly PersonDbContext _context;
        public CountriesController(PersonDbContext context) 
        {
            _context = context;
        }
        // GET: api/Countries
        [HttpGet]
        public ActionResult<List<Country>> GetAllCountry() 
        {
            var countryList = _context.Countries.ToList();
            return Ok(countryList);
        }

        // GET api/Countries/5
        [HttpGet("{id}")]
        public ActionResult<List<Country>> GetCityByCountry(int id)
        {
            var cityList = _context.Cities.Where(a => a.CountryId == id)
                                        .Select(x => new { x.CityId, x.CityName });
            return Ok(cityList);
        }

        // POST api/<CountriesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CountriesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CountriesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
