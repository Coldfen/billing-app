import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/interfaces';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: User = {
    auth: true,
    login: 'test@mail.ru',
    password: 'test1234'
  }

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

    logout() {
      this._authService.logout()
      this._router.navigate(['/auth'])
    }

  ngOnInit(): void {
  }

}
