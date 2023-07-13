import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IndividualReservation } from './../models/addIndividualReservationDto'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndividualReservationsService {

  apiUrl = 'https://localhost:7160/api/reservations/'
  apiVersion = '?api-version=1.0'

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token')});
  options = { headers: this.headers };
  
  addReservation(reservation: IndividualReservation): Observable<any>{
    return this.http.post(this.apiUrl + 'individual' + this.apiVersion, reservation, this.options);
  }

  getReservations(date: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'individual/' + date + this.apiVersion, this.options);
  }
}
