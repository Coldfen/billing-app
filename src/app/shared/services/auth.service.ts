import { Injectable } from '@angular/core';
import {catchError, Observable, of, Subject, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../interfaces";
import { environment } from 'src/environments/environment';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _user: User
  private _res: any

  // private res: ReplaySubject<User> =new  ReplaySubject<User>(1);
  // public get user() {
  //   return this.res.asObservable()
  // }

  constructor( private _http: HttpClient, private _router: Router) {
  }

  getUser() {
    return this._res[0]
  }

  login( user: User ): Observable<any> {
      return this._http.post(environment.DBUrl + "/login/user", user)
        .pipe(
          tap(responce => this._res = responce),
        )
  }

  // setToken(token: string) {
  //   localStorage.setItem('token', token);
  // }
  //
  // getToken() {
  //   return localStorage.getItem('token');
  // }

  isLoggedIn() {
    return this._res;
  }

  // login( _user: User): Observable<string | boolean> {
  //
  //   if (_user.login === '' && _user.password === '') {
  //     this.setToken('dsfjirojhzldjfiosijcaowfgs')
  //     return of (true)
  //   }
  //   return throwError(() => new Error('Failed Login'))
  // }

  logout() {
    this._router.navigate(['auth'])
  }
}
