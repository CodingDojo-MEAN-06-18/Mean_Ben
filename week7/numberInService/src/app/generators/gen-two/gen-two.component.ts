import { Component, OnInit } from '@angular/core';
import {GenService} from "../../gen.service";
@Component({
  selector: 'app-gen-two',
  templateUrl: './gen-two.component.html',
  styleUrls: ['./gen-two.component.css']
})
export class GenTwoComponent implements OnInit {
  numbersB: number[] = [];
  constructor(private _genService: GenService) { }

  ngOnInit() {
    this.numbersB =this._genService.getNumberB();
  }

  onClick(){
    this._genService.genOneRandomN(this.numbersB)

  }









}
