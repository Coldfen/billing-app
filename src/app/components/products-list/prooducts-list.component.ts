import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../models/product";
import {products as data} from "../../data/products";

type Card = {
  id: string,
  title: string,
  price: number,
  period: Date,
  message_limit: string
};

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: IProduct[] = data

  constructor() { }

  ngOnInit(): void {
  }

}
