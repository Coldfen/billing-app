import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct, ITarif } from '../interfaces';
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private _http: HttpClient,
    private _userService: UserService
  ) { }

  getPrice(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(environment.DBUrl + '/tariffs')
  }

  getHistory(): Observable<ITarif[]> {
    return this._http.get<ITarif[]>(environment.DBUrl + `/order/${Number(this._userService.getUserId())}`)
  } 

  buyTariff() {

  }

  getActiveTariff(): Observable<ITarif[]>  {
    return this._http.get<ITarif[]>(environment.DBUrl + `/current_tariff/${Number(this._userService.getUserId())}`)
  }


 }
