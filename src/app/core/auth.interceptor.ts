import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser } from './interfaces/user';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authentication: AuthenticationService) { }

 intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   return next.handle(request).pipe(tap(event => {
     if (event instanceof HttpResponse) {
       if (event.url.endsWith('login') || event.url.endsWith('register')) {
         //TODO save user
         console.log('login/register happend')
         const newlyLoggedUser: any = event.body;
         this.authentication.handleLogin(newlyLoggedUser)
       } else if (event.url.endsWith('logout')) {
         this.authentication.handleLogin(undefined);
       }
     }
   }));
 }
}
