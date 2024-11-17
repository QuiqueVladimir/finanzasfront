import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatAnchor, MatButton} from '@angular/material/button';
import {Router, RouterLink} from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user-entity';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatFormField,
    MatCardActions,
    MatInput,
    MatButton,
    MatAnchor,
    RouterLink,
    FormsModule
  ],
  templateUrl: './register-card.component.html',
  styleUrl: './register-card.component.css'
})
export class RegisterCardComponent {
  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  register() {
    const newUser: User = { id: 0, name: this.name, username: this.username, email: this.email, password: this.password };
    this.userService.registerUser(newUser).subscribe(user => {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/dashboard']);
    });
  }
}
