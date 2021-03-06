import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token): void {
    localStorage.setItem('token', token);
  }
}
