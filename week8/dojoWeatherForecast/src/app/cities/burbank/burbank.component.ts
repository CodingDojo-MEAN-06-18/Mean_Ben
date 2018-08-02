import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../weather.service';
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weatherData: any[]= [];
  dataExist: boolean = false;
  newAverageWeather:number = 0;
  constructor(private weatherService:WeatherService) {
      this.weatherService.addCity("burbank")
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
