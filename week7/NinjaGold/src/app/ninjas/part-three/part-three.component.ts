import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";

@Component({
  selector: 'app-part-three',
  templateUrl: './part-three.component.html',
  styleUrls: ['./part-three.component.css']
})
export class PartThreeComponent implements OnInit {
   ninjaArray: number[]= [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.ninjaArray = this._dataService.getNinjaArr();
  }



}
