using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace work_01.Models
{
    public class Country
    {
        public int CountryId { get; set; }
        [Required]
        public string CountryName { get; set; }
        public virtual ICollection<City> City { get; set; }
        public virtual ICollection<PersonalInfo> PersonalInfos { get; set; }
    }
}
