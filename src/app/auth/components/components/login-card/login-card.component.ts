import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatAnchor, MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard,
    MatCardActions,
    MatFormField,
    MatInput,
    MatAnchor,
    MatButton,
    RouterLink
  ],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css'
})
export class LoginCardComponent {

}
