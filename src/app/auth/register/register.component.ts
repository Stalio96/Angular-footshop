import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator, passwordMatch } from '../util';
import { AuthenticationService } from 'src/app/authentication.service';
import { MessageBusService, MessageType } from 'src/app/core/message-bus.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(4)]);

  registerFormsGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator]),
    'password': this.passwordControl,
    'rePassword': new FormControl(null, [Validators.required, passwordMatch(this.passwordControl)])//passwordMatch(this.passwordControl)])
  })

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private messageBus: MessageBusService) { }

  ngOnInit(): void {
  }

  register(){
    const body = this.registerFormsGroup.value;

    this.authService.register(body).subscribe(() => {
      this.router.navigate(['/home']);

      this.messageBus.notifyForMessage({text: 'User succesfully register in.', type: MessageType.Succes});
    });
  }

}
