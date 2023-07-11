import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { NewProfile } from '../models/registrationDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://localhost:7160/api/'
  apiVersion = '?api-version=1.0'

  register(){

  }

  public loginAsCoach(user: User): Observable<string> {
      return this.http.post(this.apiUrl + 'coachs/coach' + this.apiVersion, user, {responseType: 'text'});
  }

  public loginAsClient(user: User): Observable<string> {
    return this.http.post(this.apiUrl + 'clients/client' + this.apiVersion, user, {responseType: 'text'});
  }

  public registerAsClient(user: NewProfile): Observable<any> {
    return this.http.post(this.apiUrl + 'clients' + this.apiVersion, user);
  }

  public registerAsCoach(user: NewProfile): Observable<any> {
    return this.http.post(this.apiUrl + 'coachs' + this.apiVersion, user);
  }
}
