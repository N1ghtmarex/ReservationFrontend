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

  
  
  addReservation(reservation: IndividualReservation): Observable<any>{

    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    const options = { headers: headers };

    return this.http.post(this.apiUrl + 'individual' + this.apiVersion, reservation, options);
  }
}
