import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { IUser } from '../core/interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor(private router: Router, private httpClient: HttpClient) {
    
  }

  //TO DO setCookie

  login(userData: { email: string, password: string, myShoes: string[] }): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${environment.apiUrl}user/login`, userData, { withCredentials: true, observe: 'response', headers: new HttpHeaders().set('token', 'my-auth-token') })
      .pipe(
        tap(response => console.log(response)),
        map(response => response.body),
        tap(user => this.currentUser = user))
  }

  register(userData: { email: string, password: string, myShoes: string[] }): Observable<IUser> {
    return this.httpClient
       .post<IUser>(`${environment.apiUrl}user/register`, userData, { withCredentials: true, observe: 'response' })
       .pipe(
        tap(response => console.log(response)),
        map(response => response.body),
        tap(user => this.currentUser = user))
  }

  logout(): Observable<void> {
    delete this.currentUser;
    return this.httpClient.get<void>(`${environment.apiUrl}user/logout`, {withCredentials: true});
  }
}
