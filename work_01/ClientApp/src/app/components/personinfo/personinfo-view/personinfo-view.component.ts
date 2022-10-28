import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { City } from '../../../models/city';
import { Country } from '../../../models/country';
import { PersonInfo } from '../../../models/person-info';
import { CityService } from '../../../services/city.service';
import { CountryService } from '../../../services/country.service';
import { NotifyService } from '../../../services/notify.service';
import { PersoninfoService } from '../../../services/personinfo.service';
import { ConfirmDeleteDialogComponent } from '../../dialog/confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-personinfo-view',
  templateUrl: './personinfo-view.component.html',
  styleUrls: ['./personinfo-view.component.css']
})
export class PersoninfoViewComponent implements OnInit {
  personinfo: PersonInfo[] = [];
  countries: Country[] = [];
  city: City[] = [];
  dataSource: MatTableDataSource<PersonInfo> = new MatTableDataSource(this.personinfo);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["personalInfoId","name", "countryId", "cityId", "languageSkills", "dateOfBirth","resumeUpload", "actions"];
  constructor(
    private personSvc : PersoninfoService,
    private countrySvc: CountryService,
    private citySvc: CityService,
    private notifySvc : NotifyService,
    private dialog : MatDialog
  ) { }

  confirmDelete(item: PersonInfo) {
    this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '450px'
    }).afterClosed().subscribe(r => {
      if (r) this.personSvc.deletePersonInfo(Number(item.personalInfoId))
        .subscribe(x => {
          this.notifySvc.success("Data deleted", "DISMISS");
          this.dataSource.data = this.dataSource.data.filter(d => d.personalInfoId != x.personalInfoId);
        }, err => {
          this.notifySvc.fail("Data delete failed", "DISMISS");
        })
    });
  }

  getCountryName(id: number) {
    let z = this.countries.find(c => c.countryId == id);
    return z ? z.countryName : '';
  }

  getCityName(id: number) {
    let z = this.city.find(c => c.countryId == id);
    return z ? z.cityName : '';
  }
  ngOnInit(): void {
    this.personSvc.getPersonInfo().
      subscribe(x => {
        this.personinfo = x;
        console.log(x);
        this.dataSource.data = this.personinfo;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, err => {
        this.notifySvc.fail("Failed to load character data", "DISMISS");
      });
    this.countrySvc.GetCountry().
      subscribe(x => {
        this.countries = x;
      }, err => {
        this.notifySvc.fail("Failed to load cartoon data", "DISMISS");
      })
    this.citySvc.getCity().
      subscribe(x => {
        this.city = x;
      }, err => {
        this.notifySvc.fail("Failed to load cartoon data", "DISMISS");
      })
  }

}
