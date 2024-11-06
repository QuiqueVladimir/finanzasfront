import { Component } from '@angular/core';
import {RegisterCardComponent} from '../../components/components/register-card/register-card.component';
import {RouterLink} from '@angular/router';
import {FooterLoginComponent} from '../../components/footer-login/footer-login.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RegisterCardComponent,
    RouterLink,
    FooterLoginComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
