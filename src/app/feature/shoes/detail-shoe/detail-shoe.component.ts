import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { IShoe } from 'src/app/core/interfaces/shoe';
import { IUser } from 'src/app/core/interfaces/user';
import { ShoeService } from '../../shoe.service';

@Component({
  selector: 'app-detail-shoe',
  templateUrl: './detail-shoe.component.html',
  styleUrls: ['./detail-shoe.component.css']
})
export class DetailShoeComponent implements OnInit {
  shoe: IShoe;
  isOwner: boolean;
  shoeId: string;
  cart: any;
  isShoeInCart: boolean;
  currentUser: IUser;
  
  constructor(private shoeService: ShoeService,
    private activatedRoute: ActivatedRoute, 
    private authService: AuthService,
    public router: Router) { }
    
    ngOnInit(): void {
      this.currentUser = this.authService.currentUser;
      const userId = this.authService.currentUser?._id;
      this.shoeId = this.activatedRoute.snapshot.params['id'];
      this.shoeService.loadShoeById(this.shoeId).subscribe(shoe => {
        this.shoe = shoe;
        this.isOwner = userId == this.shoe.owner;
        this.shoeService.getMyshoes(userId).subscribe(match => {
          this.cart = match;
          for(let i of this.cart){
            if(i._id == this.shoeId){
              this.isShoeInCart = true;
              break;
            }else {
              this.isShoeInCart = false;
            }
          };
        });
    });
  }

  deleteShoe(): void{
    this.shoeService.deleteShoe(this.shoeId).subscribe({
      next: () => {
        this.router.navigate(['/shoe/all'])
      }
    });
  }

  toCart(){
    this.shoeService.toCart(this.authService.currentUser, this.shoeId).subscribe({});
    this.isShoeInCart = true;
    this.router.navigate(['/shoe/detail/' + this.shoeId]);
  }

  removeCart(){
    this.shoeService.removeCart(this.shoeId).subscribe({})
    this.isShoeInCart = false;
    this.router.navigate(['/shoe/detail/' + this.shoeId]);
  }

}
