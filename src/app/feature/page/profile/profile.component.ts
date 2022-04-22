import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { IShoe } from 'src/app/core/interfaces/shoe';
import { IUser } from 'src/app/core/interfaces/user';
import { ShoeService } from '../../shoe.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: IUser;
  shoeList: any;

  constructor(private authService: AuthService, private shoeService: ShoeService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
    this.shoeService.getMyshoes(this.user._id).subscribe(shoes => {
      this.shoeList = shoes;
    });
    console.log(this.user)
  }

}
