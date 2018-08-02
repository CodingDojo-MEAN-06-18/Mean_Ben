import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../weather.service';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weatherData: any[]= [];
  dataExist: boolean = false;

  constructor(private weatherService:WeatherService) {
    this.weatherService.addCity("dallas")
   }

  ngOnInit() {

    this.weatherService.weatherData.subscribe(
      (data) => {this.weatherData = data
            this.dataExist = true;
            console.log("getdata=>",this.weatherData)
            console.log(this.weatherData.length)
            console.log(this.dataExist)
            // const averageWeather = (data.main.temp_min+data.main.temp_max)/2
            // this.newAverageWeather= averageWeather
      },
      (res: Response) => this.dataExist=false

    );
  }
}
