import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  apiKey: string = "&APPID=bf623345ef04dc86d1898a12b8f86ed1";
  api: string = "http://api.openweathermap.org/data/2.5/weather?q="
  measurement ="&units=imperial"
  weatherData: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private _http: HttpClient) {

  }

  retrieveAPI(cityName){

    this._http.get(`${this.api}${cityName}${this.measurement}${this.apiKey}`).subscribe(
      (rowData: any[]) => {
        this.weatherData.next(rowData);// replace [] with data received from api call.
        console.log("retrieveAPI===>",this.weatherData);
      }

    )
  }

  addCity(cityName: any){
    this._http.get(`${this.api}${cityName}${this.measurement}${this.apiKey}`).subscribe(
      (response) => {this.retrieveAPI(cityName)}
    )
  console.log('service ===> to requested component');
  }

}
// interface WeatherTemp{
//   main.tepm:  number;
// }
