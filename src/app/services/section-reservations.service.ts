import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SectionReservation } from '../models/addSectionReservationDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionReservationsService {

  apiUrl = 'https://localhost:7160/api/reservations/'
  apiVersion = '?api-version=1.0'

  constructor(private http: HttpClient) { }

  addReservation(reservation: SectionReservation): Observable<any>{
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    const options = { headers: headers };

    return this.http.post(this.apiUrl + 'section' + this.apiVersion, reservation, options);
  }
}
