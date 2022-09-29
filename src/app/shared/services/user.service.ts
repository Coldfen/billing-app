import { Injectable } from '@angular/core';
import { User } from '../interfaces';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _currentUser: User

  constructor(private _authService: AuthService) {
  }

    setUser() {
      this._currentUser = this._authService.getUser()
      localStorage.setItem('login', this._currentUser.login)
      localStorage.setItem('userId', this._currentUser.id || "")
    }

    getCurrentUser() {
      return localStorage.getItem('login')
    }

    getUserId() {
      return localStorage.getItem('userId')
    }

}
