import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoeService } from '../../shoe.service';

@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html',
  styleUrls: ['./add-shoe.component.css']
})
export class AddShoeComponent implements OnInit {

  addShoeGroup: FormGroup = this.formBuilder.group({
    'brand': new FormControl(null, [Validators.required]),
    'model': new FormControl(null, [Validators.required]),
    'year': new FormControl(null, [Validators.required]),
    'img': new FormControl(null, [Validators.required]),
    'material': new FormControl(null, [Validators.required]),
    'price': new FormControl(null, [Validators.required]),
    'description': new FormControl(null, [Validators.required]),
    'size': new FormControl(null, [Validators.required]),
    'color': new FormControl()
  })

  constructor(private formBuilder: FormBuilder, 
    private shoeService: ShoeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addShoe(){
    const body = this.addShoeGroup.value;

    this.shoeService.addShoe(body).subscribe({
      next: (shoe) => {
        console.log(shoe);
        this.router.navigate(['/home'])
      }
    })
  }

}
