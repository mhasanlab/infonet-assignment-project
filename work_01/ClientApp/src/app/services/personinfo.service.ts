import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonInfo } from '../models/person-info';
import { ResumeUpload } from '../models/resume-upload';

@Injectable({
  providedIn: 'root'
})
export class PersoninfoService {

  constructor(private http: HttpClient) { }
  getPersonInfo(): Observable<PersonInfo[]> {
    return this.http.get<PersonInfo[]>(`http://localhost:46958/api/PersonInfos`);
  }
  getPersonInfoId(id: number): Observable<PersonInfo> {
    return this.http.get<PersonInfo>(`http://localhost:46958/api/PersonInfos/${id}`);
  }
  deletePersonInfo(id: number): Observable<any> {
    return this.http.delete<PersonInfo>(`http://localhost:46958/api/PersonInfos/${id}`);
  }
  insertPersonInfo(data: PersonInfo): Observable<PersonInfo> {
    return this.http.post<PersonInfo>(`http://localhost:46958/api/PersonInfos`, data);
  }
  updatePersonInfo(data: PersonInfo): Observable<PersonInfo> {
    return this.http.put(`http://localhost:46958/api/PersonInfos/${data.personalInfoId}`, data);
  }
  upload(id: number, f: File): Observable<ResumeUpload> {
    const formData = new FormData();
    formData.append('file', f);
    return this.http.post<ResumeUpload>(`http://localhost:46958/api/PersonInfos/Uploads/${id}`, formData);
  }
}
