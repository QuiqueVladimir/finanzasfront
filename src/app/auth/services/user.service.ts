import { Injectable } from '@angular/core';
import {User} from '../models/user-entity';
import {BaseService} from '../../shared/services/base.service';
import {catchError, Observable, retry } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  constructor(private router: Router) {
    super('/users');
  }

  getUsers(): Observable<Array<User>> {
    return this.getAll();
  }

  registerUser(user: User): Observable<User> {
    return this.create(user);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.resourcePath()}?email=${email}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updatePassword(id: number, newPassword: string): Observable<User> {
    return this.update(id, { password: newPassword });
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('user') !== null;
  }

  logout(): void {
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

}
