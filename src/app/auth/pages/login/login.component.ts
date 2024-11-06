import { Component } from '@angular/core';
import {LoginCardComponent} from '../../components/components/login-card/login-card.component';
import {FooterLoginComponent} from '../../components/footer-login/footer-login.component';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginCardComponent,
    FooterLoginComponent,
    MatButton,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
