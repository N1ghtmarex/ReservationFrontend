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

  getReservations(date: string, time: string, sportId: string): Observable<any> {

    let url = '?'

    if (date && !time && !sportId){

      url = '?date=' + date + '&'
    }
    else if (date && time && !sportId){
      let splitTime = time.split(':', 2)
      url = '?date=' + date + '&time=' + splitTime[0] + '%3A' + splitTime[1] + '&'
    }
    else if (date && time && sportId){
      let splitTime = time.split(':', 2)
      url = '?date=' + date + '&time=' + splitTime[0] + '%3A' + splitTime[1] + '&sportId=' + sportId + '&'
    }
    else if (date && !time && sportId) {
      url = '?date=' + date + '&sportId=' + sportId + '&'
    }
    else if (!date && time && !sportId) {
      let splitTime = time.split(':', 2)
      url = '?time=' + splitTime[0] + '%3A' + splitTime[1] + '&'
    }
    else if (!date && time && sportId){ 
      let splitTime = time.split(':', 2)
      url = '?time=' + splitTime[0] + '%3A' + splitTime[1] + '&sportId=' + sportId + '&'
    }
    else if (!date && !time && sportId) {
      url = '?sportId=' + sportId + '&'
    }

    return this.http.get<any>(this.apiUrl + 'individual' + url + 'api-version=1.0', this.options);
  }
}
