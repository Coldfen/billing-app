import { Component, OnInit } from '@angular/core';
import { ITarif } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit {
  tarifStory: ITarif[]

  constructor(
    private _dataService: DataService
  ) { }


  ngOnInit(): void {
    this._dataService.getHistory().subscribe(
      (res) => {
         this.tarifStory = res
         console.log(this.tarifStory)
      }
    )

  }

}
