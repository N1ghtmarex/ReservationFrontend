import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  apiUrl = 'https://localhost:7160/api/sections/'
  apiVersion = '?api-version=1.0'

  headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token')});
  options = { headers: this.headers};

  constructor(private http: HttpClient) { }

  addSection(name: string, sportId: string, roomId: string): Observable<any> {
    return this.http.post(this.apiUrl + this.apiVersion, {name: name, sportId: sportId, roomId: roomId}, this.options);
  }

  getSection(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'all' + this.apiVersion, this.options);
  }

  getSectionForRecord(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'free' + this.apiVersion, this.options);
  }

  addClientToSection(sectionId: string): Observable<any> {
    return this.http.post(this.apiUrl + 'add-to-section=' + sectionId, this.options);
  }
}
