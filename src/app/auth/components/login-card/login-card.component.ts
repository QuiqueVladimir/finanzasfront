import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatAnchor, MatButton} from '@angular/material/button';
import {Router, RouterLink} from '@angular/router';
import { UserService } from '../../services/user.service';
import {FormsModule} from '@angular/forms';

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
    RouterLink,
    FormsModule
  ],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css'
})
export class LoginCardComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {
  }

  login() {
    this.userService.getUserByEmail(this.email).subscribe(user => {
      if (user && user.password === this.password) {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid email or password');
      }
    });
  }
}
