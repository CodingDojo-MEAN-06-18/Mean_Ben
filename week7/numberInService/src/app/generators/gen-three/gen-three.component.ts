import { Component, OnInit } from '@angular/core';
import {GenService} from "../../gen.service";
@Component({
  selector: 'app-gen-three',
  templateUrl: './gen-three.component.html',
  styleUrls: ['./gen-three.component.css']
})
export class GenThreeComponent implements OnInit {
  difference: number = null;

  constructor(private _genService: GenService) { }

  ngOnInit() {
    // this.sum =this._genService.getSum();
  }

  onClick(){
    this.difference=this._genService.getDifference();
    console.log(this._genService.getDifference())
  }

















}
