import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndividualRecordsService {

  apiUrl = 'https://localhost:7160/api/records/'
  apiVersion = '?api-version=1.0'

  headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token')});
  options = { headers: this.headers};

  constructor(private http: HttpClient) { }

  addIndividualRecord(id: string): Observable<any> {
    return this.http.post(this.apiUrl + id + this.apiVersion, null, this.options);
  }
}
