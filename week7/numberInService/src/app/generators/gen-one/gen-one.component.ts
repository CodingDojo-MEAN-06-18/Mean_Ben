import { Component, OnInit } from '@angular/core';
import {GenService} from "../../gen.service";


@Component({
  selector: 'app-gen-one',
  templateUrl: './gen-one.component.html',
  styleUrls: ['./gen-one.component.css']
})
export class GenOneComponent implements OnInit {
  numbersA: number[] = [];

  constructor(private _genService: GenService) { }

  ngOnInit() {
    this.numbersA =this._genService.getNumberA();
  }

  onClick(){
    this._genService.genOneRandomN(this.numbersA)

  }













}
