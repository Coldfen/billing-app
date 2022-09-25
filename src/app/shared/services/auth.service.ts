import { Injectable } from '@angular/core';
import {catchError, Observable, Subject, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../interfaces";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public error: Subject<string> = new Subject<string>()

  constructor( private _http: HttpClient ) {}


  // Метод для api
  // login( user: User ): Observable<any> {
  //     return this._http.post('скоро я вырасту и стану api запросом', user)
  //       .pipe(
  //         tap(user => console.log(user)),
  //         catchError(this.handleError.bind(this))
  //       )
  // }

    login(user: User) {
      if (
        user.email === 'test@mail.ru' && user.password === "test123"
      ) {
        user.auth = true
        return user
      }

      return new Error('Неверный логин или пароль')
    }

  private handleError(error: HttpErrorResponse) {

    this.error.next("Неверный логи или пароль")

    return throwError(error)
  }
}
