import { Component, OnInit } from '@angular/core';
import { TARIFSTORYMOCK } from '../data/taris-story';
import { ITarif } from '../shared/interfaces';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit {
  tarifStory: ITarif[] = TARIFSTORYMOCK

  constructor() { }

  ngOnInit(): void {
  }

}
