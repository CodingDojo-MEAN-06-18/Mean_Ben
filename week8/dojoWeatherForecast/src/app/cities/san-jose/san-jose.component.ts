import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../weather.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  weatherData: any[]= [];
  dataExist: boolean = false;
  newAverageWeather:number = 0;
  constructor(private weatherService:WeatherService) {
  this.weatherService.addCity("san jose")}

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
