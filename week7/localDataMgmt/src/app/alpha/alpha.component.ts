import { Component, OnInit } from '@angular/core';
import { DataService} from "../data.service";

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: number[] =[];

  constructor(private_dataService: DataService) { }

  ngOnInit() {
    this.numbers =this.private_dataService.retrieveNumbers();
  }

}
