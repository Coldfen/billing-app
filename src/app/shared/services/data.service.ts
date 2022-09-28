import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITarif } from '../interfaces';
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private _http: HttpClient,
    private _userService: UserService
  ) { }

  getPrice(): Observable<any> {
    return this._http.get(environment.DBUrl + '/tariffs')
  }

  getHistory(): Observable<ITarif[]> {
    return this._http.get<ITarif[]>(environment.DBUrl + `/order/${Number(this._userService.getUserId())}`)
  } 

  buyTariff() {

  }

  getActiveTariff() {
    return this._http.get(environment.DBUrl + `/current_tariff/${Number(this._userService.getUserId())}`)
  }


 }
