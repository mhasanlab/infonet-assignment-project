import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }
  getCity(): Observable<City[]> {
    return this.http.get<City[]>(`http://localhost:46958/api/Cities`);
  }
  getCityById(id: number): Observable<City> {
    return this.http.get<City>(`http://localhost:46958/api/Cities/${id}`);
  }
}
