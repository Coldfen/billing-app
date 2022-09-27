import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../shared/services/auth.service";
import {User} from "../shared/interfaces";
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {

  private _submitted: boolean = false
  public result ?: Error | User
  public message: string

  private _authForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4)
    ])
  })

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) {}

  get authForm(): FormGroup {
    return this._authForm
  }

  get email() {
    return this._authForm.get('email')
  }

  get password() {
    return this._authForm.get('password')
  }

  get submitted() {
    return this._submitted
  }

  submit() {
    if (this._authForm.invalid) {
      return
    }

    this._submitted = true
    const user: User = {
      login: this.email?.value,
      password: this.password?.value,
    }

    this._auth.login(user).subscribe(() => {
      this._authForm.reset();
      this._router.navigate(['/home', 'price']);
      this._submitted = false
    },  () => {
      this.message = "неверный логин или пароль"
      this._submitted = false
    })
  }
}
