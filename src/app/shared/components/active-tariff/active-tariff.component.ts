import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-active-tariff',
  templateUrl: './active-tariff.component.html',
  styleUrls: ['./active-tariff.component.scss']
})
export class ActiveTariffComponent implements OnInit {

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this._dataService.getActiveTariff().subscribe(
      (res) => console.log(res) 
    )
  }

}
