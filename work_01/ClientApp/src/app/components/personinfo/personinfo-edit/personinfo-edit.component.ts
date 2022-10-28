import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonInfo } from '../../../models/person-info';
import { CountryService } from '../../../services/country.service';
import { NotifyService } from '../../../services/notify.service';
import { PersoninfoService } from '../../../services/personinfo.service';

@Component({
  selector: 'app-personinfo-edit',
  templateUrl: './personinfo-edit.component.html',
  styleUrls: ['./personinfo-edit.component.css']
})
export class PersoninfoEditComponent implements OnInit {
  resumeFile!: File;
  personinfo: PersonInfo = new PersonInfo();
  countryList: any;
  cityList: any;
  languageList!: languages[];
  /*skills: Array<string> = ['C#','C++','Java','PHP','SQL'];*/
  personinfoForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    countryId: new FormControl('', Validators.required),
    cityId: new FormControl('', Validators.required),
    languageSkills: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    resumeUpload: new FormControl('', Validators.required)
  });
  constructor(
    private personSvc: PersoninfoService,
    private countrySvc: CountryService,
    private notifySvc: NotifyService,
    private datePipe: DatePipe,
    private activateRoute: ActivatedRoute
  ) { }

  get f() {
    return this.personinfoForm.controls;
  }

  update() {
    if (this.personinfoForm.invalid) return;
    console.log(this.personinfoForm.value);
    this.personinfo.dateOfBirth = new Date(<string>this.datePipe.transform(this.personinfo.dateOfBirth, "yyyy-MM-dd"));
    Object.assign(this.personinfo, this.personinfoForm.value);
    this.personinfo.resumeUpload = 'no-pic.png';
    console.log(this.personinfo);

    this.personSvc.updatePersonInfo(this.personinfo)
      .subscribe(r => {
        if (this.resumeFile != null) {
          this.upload(Number(this.personinfo.personalInfoId));
        }
        else {
          this.notifySvc.success("Succeeded to update character data", "DISMISS");
        }
      }, err => {
        this.notifySvc.fail("Fail to save data!!", "Dismiss");
      })
  }

  onCountrySelected(id: any) {
    this.countrySvc.GetCityById(id).subscribe(x => {
      this.cityList = x;
      console.log(x);
    });
  }

  getLanguages() {
    this.languageList = [
      { languageid: 1, name: 'C#', isselected: false },
      { languageid: 2, name: 'C++', isselected: false },
      { languageid: 3, name: 'Java', isselected: false },
      { languageid: 4, name: 'PHP', isselected: false },
      { languageid: 5, name: 'SQL', isselected: false }
    ]
  }

  onchange() {
    this.languageList;
  }

  upload(id: number) {
    console.log(this.resumeFile);
    let reader = new FileReader();
    reader.addEventListener("load", (event: any) => {
      this.personSvc.upload(id, this.resumeFile)
        .subscribe(r => {
          this.personinfo.resumeUpload = r.upload;
          this.notifySvc.success("Succeeded to save character data", "DISMISS");
          this.personinfoForm.reset({});
        }, err => {
          this.notifySvc.fail("Fail to upload image!!", "DISMISS");
        });
    });
    reader.readAsDataURL(this.resumeFile);
  }

  onChange(event: any) {
    this.resumeFile = event.target.files[0];
  }
  ngOnInit(): void {
    let id: number = this.activateRoute.snapshot.params['id'];
    this.personSvc.getPersonInfoId(id)
      .subscribe(r => {
        this.personinfo = r;
        this.personinfoForm.patchValue(this.personinfo);
      }, err => {
        this.notifySvc.fail("Fail to load character data!!", "DISMISS");
      });
    this.getLanguages();
    this.countrySvc.GetCountry()
      .subscribe(r => {
        this.countryList = r;
      }, err => {
        this.notifySvc.fail("Failed to load country data!!", "Dismiss");
      });
  }

}
class languages {
  languageid?: number;
  name?: string;
  isselected?: boolean;
}
