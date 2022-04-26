import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { ShoeService } from 'src/app/feature/shoe.service';
import { AuthService } from '../auth.service';
import { IShoe } from '../interfaces/shoe';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //currentUser: Observable<IUser> = this.authService.currentUser$;
  //isLogged$: Observable<boolean> = this.authService.isLogged$;

  //serachFormGroup: FormGroup = this.formBuilder.group({
  //  'search': new FormControl('', [])
  //}
  get isLogged(): boolean {
    return this.authService.isLogged;
  }

  get currentUser(): IUser {
    return this.authService.currentUser;
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  logout(): void {
    console.log('logout called')
    this.authService.logout().subscribe({
      
    });
    this.router.navigate(['/home']);
  }

  //search() {
  //  const { search } = this.serachFormGroup.value;
  //  console.log(search)
  //  this.shoeService.searchShoe(search).subscribe(result => {
  //    this.shoeMatch = result;
  //    console.log(result);
  //  });
  //}

}
