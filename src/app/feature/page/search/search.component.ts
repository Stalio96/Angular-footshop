import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { debounceTime, mergeMap, startWith } from 'rxjs';
import { IShoe } from 'src/app/core/interfaces/shoe';
import { ShoeService } from '../../shoe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchContol = new FormControl('');

  shoeList: IShoe[];

  constructor(
    private shoeService: ShoeService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchContol.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      mergeMap(searchTerm => this.shoeService.shoeSearch(searchTerm))
    )
    .subscribe(shoeList => {
      this.shoeList = shoeList
    })
  }
}
