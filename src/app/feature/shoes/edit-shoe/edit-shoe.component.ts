import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { IShoe } from 'src/app/core/interfaces/shoe';
import { ShoeService } from '../../shoe.service';

@Component({
  selector: 'app-edit-shoe',
  templateUrl: './edit-shoe.component.html',
  styleUrls: ['./edit-shoe.component.css']
})
export class EditShoeComponent implements OnInit {
  shoe: IShoe;
  shoeId: string;

  editShoeGroup: FormGroup = this.formBuilder.group({
    'brand': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'model': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'year': new FormControl(null, [Validators.required]),
    'img': new FormControl(null, [Validators.required]),
    'material': new FormControl(null, [Validators.required, Validators.minLength(4)]),
    'price': new FormControl(null, [Validators.required, Validators.min(50)]),
    'description': new FormControl(null, [Validators.required, Validators.maxLength(30)]),
    'size': new FormControl(null, [Validators.required, Validators.maxLength(2)]),
    'color': new FormControl(null, [Validators.required])
  })

  constructor(private shoeService: ShoeService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.shoeId = this.activatedRoute.snapshot.params['id'];
    this.shoeService.loadShoeById(this.shoeId).subscribe(shoe => {
      console.log(shoe)
      this.shoe = shoe;
    });
  }

  editShoe() {
    const body = this.editShoeGroup.value;

    this.shoeService.editShoe(this.shoeId, body).subscribe({
      next: (shoe) => {
        console.log(shoe);
        this.router.navigate([`/shoe/detail/${this.shoeId}`]);
      }
    })
  }

}
