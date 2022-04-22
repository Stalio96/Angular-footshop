import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { IShoe } from 'src/app/core/interfaces/shoe';
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
  cart: boolean = true;
  
  constructor(private shoeService: ShoeService,
    private activatedRoute: ActivatedRoute, 
    private authService: AuthService,
    public router: Router) { }
    
    ngOnInit(): void {
      console.log(this.authService.currentUser)
      this.shoeId = this.activatedRoute.snapshot.params['id'];
      this.shoeService.loadShoeById(this.shoeId).subscribe(shoe => {
        this.shoe = shoe;
        this.isOwner = this.authService.currentUser._id == this.shoe.owner;
        this.cart = this.authService.currentUser.myShoes.includes(this.shoeId);
        console.log(this.cart);
    });
  }

  deleteShoe(): void{
    this.shoeService.deleteShoe(this.shoeId).subscribe({
      next: () => {
        this.router.navigate(['/all'])
      }
    });
  }

  toCart(){
    this.shoeService.toCart(this.authService.currentUser, this.shoeId).subscribe({
      next: () => {
        this.cart = true;
      }
    });
  }

  removeCart(){
    this.shoeService.removeCart(this.shoeId).subscribe({
      next: () => {
        this.cart = false;
      }
    })
  }

}
