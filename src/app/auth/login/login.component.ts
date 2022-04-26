import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';

  loginFormsGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl(null, [Validators.required, emailValidator]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(4)])
  })

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    const body = this.loginFormsGroup.value

    this.authService.login(body).subscribe({
      next: user => {
        this.router.navigate(['/home']);
      },
      complete: () => {
        console.log('completed')
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }

}
