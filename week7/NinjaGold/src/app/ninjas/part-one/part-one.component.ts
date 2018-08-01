import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";

@Component({
  selector: 'app-part-one',
  templateUrl: './part-one.component.html',
  styleUrls: ['./part-one.component.css']
})
export class PartOneComponent implements OnInit {
  ninjaArray: number[]= [];
  total: number = 0;
  constructor(private _dataService: DataService) {

   }

  ngOnInit() {
    this.ninjaArray = this._dataService.getNinjaArr();
    // this._dataService.totalCount.subscrible(
    //   (totalCount) =>{this.total =totalCount}
    // )
  }

}
