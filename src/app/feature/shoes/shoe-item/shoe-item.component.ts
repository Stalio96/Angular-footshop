import { Component, Input, OnInit } from '@angular/core';
import { IShoe } from 'src/app/core/interfaces/shoe';

@Component({
  selector: 'app-shoe-item',
  templateUrl: './shoe-item.component.html',
  styleUrls: ['./shoe-item.component.css']
})
export class ShoeItemComponent implements OnInit {

  @Input() shoe: IShoe; 

  constructor() { }

  ngOnInit(): void {
  }

}
