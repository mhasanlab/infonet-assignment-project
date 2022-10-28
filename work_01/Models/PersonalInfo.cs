using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace work_01.Models
{
    public class PersonalInfo
    {
        public int PersonalInfoId { get; set; }
        [Required(ErrorMessage ="This field is required")]
        public string Name { get; set; }
        [ForeignKey("Country")]
        [Display(Name ="Country")]
        [Required(ErrorMessage ="This field is required!")]
        public int CountryId { get; set; }
        [ForeignKey("City")]
        [Display(Name ="City")]
        [Required(ErrorMessage ="This field is required!")]
        public int CityId { get; set; }
        [Required(ErrorMessage ="This field is required!")]
        [Display(Name="Language Skills")]
        public string LanguageSkills { get; set; }
        [Required(ErrorMessage ="This field is required!!")]
        [Display(Name ="Date Of Birth")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}",ApplyFormatInEditMode =true)]
        public DateTime DateOfBirth { get; set; }
        [Display(Name ="Resume Upload")]
        [Column(TypeName ="nvarchar(200)")]
        [Required(ErrorMessage ="Field is required!")]
        public string ResumeUpload { get; set; }
        public virtual Country Country { get; set; }
        public virtual City City { get; set; }
    }
}
