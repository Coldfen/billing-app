import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/interfaces';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  login: string | null

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _userService: UserService
    ) { }


    logout() {
      this._authService.logout()
      this._router.navigate(['/auth'])
    }

    ngOnInit(): void {
      this.login = this._userService.getCurrentUser()
  }

}
