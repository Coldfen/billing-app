import { Injectable } from '@angular/core';
import {catchError, Observable, Subject, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../interfaces";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private user: User
  private res: any

  // private res: ReplaySubject<User> =new  ReplaySubject<User>(1);
  // public get user() {
  //   return this.res.asObservable()
  // }


  constructor( private _http: HttpClient ) {}

  getUser() {
    return this.res[0]
  }
  
  login( user: User ): Observable<any> {
      return this._http.post(environment.DBUrl + "/login/user", user)
        .pipe(
          tap(responce => this.res = responce),
        )
  }

    logout() {
      localStorage.clear()
    }

}
