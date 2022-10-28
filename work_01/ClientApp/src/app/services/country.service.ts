import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }
  GetCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(`http://localhost:46958/api/Countries`);
  }
  GetCityById(id: number): Observable<Country> {
    return this.http.get<Country>(`http://localhost:46958/api/Countries/` + id);
  }
}
