import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor() { }

  authForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required, 
      Validators.email
    ]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(6)])
  })

  get email() {
    return this.authForm.get('email')
  }

  get password() {
    return this.authForm.get('password')
  }

  submit() {
    console.log(this.email)
    console.log(this.password?.value)
  }
}
