import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../shared/services/auth.service";
import {User} from "../shared/interfaces";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(
    private _auth: AuthService
  ) {}

  private _submitted: boolean = false
  public result ?: Error | User

  private _authForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

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
      email: this.email?.value,
      password: this.password?.value,
      auth: false
    }

    // this._auth.login(user).subscribe(() => {
    //   this._authForm.reset()
    //   this._submitted = false
    // },
    //   () => this._submitted = false
    //   )

     this.result = this._auth.login(user)
     this._submitted = false

  }
}
