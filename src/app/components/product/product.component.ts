import { Component, OnInit, Input } from '@angular/core';
import {IProduct} from "../../models/product";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    console.log('click btn', this)
    this.dialog.open(DialogComponent,  {
      width: '40%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.product,
    });
  }

  ngOnInit(): void {
  }

}




