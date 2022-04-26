import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './core/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _currentUser = new BehaviorSubject<IUser>(undefined);
  
  currentUser$ = this._currentUser.asObservable();
  isLogged$ = this.currentUser$.pipe(map(user => !!user))

  constructor(private httpClient: HttpClient) { 

  }

  handleLogin(newUser: IUser){
    this._currentUser.next(newUser);
  }

  handleLogout() {
    this._currentUser.next(undefined);
  }

  login(userData: { email: string, password: string, myShoes: string[] }): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${environment.apiUrl}user/login`, userData, { withCredentials: true, observe: 'response', headers: new HttpHeaders().set('token', 'my-auth-token') })
      .pipe(
        tap(response => console.log(response)),
        map(response => response.body))
  }

  register(userData: { email: string, password: string, myShoes: string[] }): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}user/register`, userData, { withCredentials: true })
  }

  logout(): Observable<void> {
    delete this.currentUser$;
    return this.httpClient.get<void>(`${environment.apiUrl}user/logout`, {withCredentials: true});
  }
}
