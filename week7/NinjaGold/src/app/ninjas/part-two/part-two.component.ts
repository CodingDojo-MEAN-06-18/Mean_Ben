import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";

@Component({
  selector: 'app-part-two',
  templateUrl: './part-two.component.html',
  styleUrls: ['./part-two.component.css']
})
export class PartTwoComponent implements OnInit {
  ninjaArray: number[]= [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.ninjaArray = this._dataService.getNinjaArr();
  }

  onClick(data){
    if(data==="farm"){
      console.log('farm');
    this._dataService.getRandomN('farm');

    }else if(data==="cave"){
      console.log('cave');
    this._dataService.getRandomN('cave');
     } else if(data==="casino"){
      console.log('casino');
    this._dataService.getRandomN('casino');
    } else if(data==="house"){
       console.log('house');
     this._dataService.getRandomN('house');
    }
    this._dataService.getTotal();
  }

}
