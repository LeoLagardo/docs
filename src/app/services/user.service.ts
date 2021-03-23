import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://verify.flexm.com/api';
  
  private loggedIn = new BehaviorSubject<boolean>(false);
  isloggedIn = this.loggedIn.asObservable();

  private user = new BehaviorSubject<string>('none');
  userName = this.user.asObservable();

  constructor(private http: HttpClient) { }

  logIn(body): Observable <any> {
    return this.http.post(`${this.apiUrl}/token/authenticate`, body);
  }

  documentList(body): Observable <any> {
    return this.http.post(`${this.apiUrl}/scans/scanDocByTenent`, body, {
      headers: new HttpHeaders().set('access-token', `${localStorage.getItem('token')}`)
    });
  }

  setUser(name) {
    this.user.next(name);
  }

  changeIsLoggedIn(value) {
    this.loggedIn.next(value);
  }
  
}
