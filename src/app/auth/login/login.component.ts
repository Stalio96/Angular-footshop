import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormsGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl(null, [Validators.required]),
    'password': new FormControl(null, [Validators.required])
  })

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    const { email, password } = this.loginFormsGroup.value

    if(email == ''){
      alert('Email is required')
    }

    if(password == ''){
      alert('Password is required')
    }

    this.authService.login(email, password);
    this.router.navigate(['/home']);
  }

}
