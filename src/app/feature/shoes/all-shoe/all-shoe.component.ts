import { Component, OnInit } from '@angular/core';
import { IShoe } from 'src/app/core/interfaces/shoe';
import { ShoeService } from '../../shoe.service';

@Component({
  selector: 'app-all-shoe',
  templateUrl: './all-shoe.component.html',
  styleUrls: ['./all-shoe.component.css']
})
export class AllShoeComponent implements OnInit {

  shoeList: IShoe[];

  constructor(private shoeService: ShoeService) { }

  ngOnInit(): void {
    this.shoeService.loadShoeList().subscribe(shoeList => {
      this.shoeList = shoeList;
    })
  }

}
