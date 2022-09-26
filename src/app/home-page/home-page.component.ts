import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: User = {
    auth: true,
    email: 'test@mail.ru',
    password: 'test1234'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
