import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../models/product";
import { DataService } from 'src/app/shared/services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

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
  public products: IProduct[]
  public error: HttpErrorResponse

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this._dataService.getPrice().subscribe(
      (res) => {
        this.products = res
        console.log(this.products)
      }, (e) => this.error = e
        
    )
  }

}
