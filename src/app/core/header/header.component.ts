import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  //serachFormGroup: FormGroup = this.formBuilder.group({
  //  'search': new FormControl('', [])
  //})


  get isLogged(): boolean {
    return this.authService.isLogged;
  }

  get currentUser(): IUser {
    return this.authService.currentUser;
  }

  constructor(private authService: AuthService,
    private shoeService: ShoeService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  logout(): void {
    this.authService.logout();
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
