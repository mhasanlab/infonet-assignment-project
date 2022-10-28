using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace work_01.Models
{
    public class City
    {
        public int CityId { get; set; }
        [Required, Display(Name ="City Name")]
        public string CityName { get; set; }
        [ForeignKey("Country")]
        [Display(Name ="Country")]
        public int CountryId { get; set; }
        public virtual Country Country { get; set; }
        public virtual ICollection<PersonalInfo> PersonalInfos { get; set; }
    }
}
