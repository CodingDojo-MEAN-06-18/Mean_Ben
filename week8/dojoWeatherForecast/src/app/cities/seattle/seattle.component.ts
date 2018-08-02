import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../weather.service';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weatherData: any[]= [];
  dataExist: boolean = false;
  constructor(private weatherService:WeatherService) {
      this.weatherService.addCity("seattle")
   }

  ngOnInit() {
    this.weatherService.weatherData.subscribe(
      (data) => {this.weatherData = data
            this.dataExist = true;
            console.log("getdata=>",this.weatherData)
            console.log(this.weatherData.length)
            console.log(this.dataExist)
      },
      (res: Response) => this.dataExist=false

    );
  }
}
