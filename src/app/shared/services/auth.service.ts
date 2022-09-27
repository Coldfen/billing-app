import { Injectable } from '@angular/core';
import {catchError, Observable, Subject, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../interfaces";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public error: Subject<string> = new Subject<string>()

  constructor( private _http: HttpClient ) {}


  
  login( user: User ): Observable<any> {
      return this._http.post(environment.DBUrl + "/login/user", user)
        .pipe(
          tap(user => console.log(user)),
        )
  }

    logout() {}

}
