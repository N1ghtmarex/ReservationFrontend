import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SectionReservation } from '../models/addSectionReservationDto';
import { Observable } from 'rxjs';
import { ISectionReservations } from '../models/sectionReservations';
import { GetWeekSectionReservations } from '../models/getWeekSectionReservationsDto';

@Injectable({
  providedIn: 'root'
})
export class SectionReservationsService {

  apiUrl = 'https://localhost:7160/api/reservations/'
  apiVersion = '?api-version=1.0'

  headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token')});
  options = { headers: this.headers};

  constructor(private http: HttpClient) { }

  getReservations(query: GetWeekSectionReservations): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'section/' + query.day + this.apiVersion, this.options)
  }

  addReservation(reservation: SectionReservation): Observable<any>{
    

    return this.http.post(this.apiUrl + 'section' + this.apiVersion, reservation, this.options);
  }
}
