import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService){
  }
  canActivate(): boolean | UrlTree {
    if(this.authService.isLogged$){
      return true;
    }

    return this.router.createUrlTree(['/login']);
  }
  
}
