import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse, User } from '../interfaces';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private _currentUserToken: AuthResponse
  constructor(
    private _authService: AuthService
  ) { }

    setUser(res: any) {
      this._currentUserToken = res
      localStorage.setItem('token', this._currentUserToken.auth_token)
    }

    getCurrentUserToken() {
      return localStorage.getItem('token')
    }

    getUserId() {
      return localStorage.getItem('userId')
    }

}
