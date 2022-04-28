import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { ShoeService } from 'src/app/feature/shoe.service';
import { AuthService } from '../auth.service';
import { IShoe } from '../interfaces/shoe';
import { IUser } from '../interfaces/user';
import { MessageBusService, MessageType } from '../message-bus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  message: string;
  isMessageError: boolean;

  get isLogged(): boolean {
    return this.authService.isLogged;
  }

  get currentUser(): IUser {
    return this.authService.currentUser;
  }

  constructor(private authService: AuthService,
    private router: Router,
    private messageBus: MessageBusService) { }

  ngOnInit(): void {
    this.subscription = this.messageBus.onNewMessage$.subscribe(newMessage => {
      this.message = newMessage?.text || '';
      this.isMessageError = newMessage?.type === MessageType.Error;

      if (this.message) {
        setTimeout(() => {
          this.messageBus.clear();
        }, 4000);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout(): void {
    console.log('logout called')
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/home']);
      
      this.messageBus.notifyForMessage({text: 'Logged out!', type: MessageType.Succes});
    });
  }
}
