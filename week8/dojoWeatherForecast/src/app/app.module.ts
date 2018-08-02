import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeattleComponent } from './cities/seattle/seattle.component';
import { SanJoseComponent } from './cities/san-jose/san-jose.component';
import { BurbankComponent } from './cities/burbank/burbank.component';
import { DallasComponent } from './cities/dallas/dallas.component';
import { WashingtonDCComponent } from './cities/washington-dc/washington-dc.component';
import { ChicagoComponent } from './cities/chicago/chicago.component';
import { CitiesComponent } from './cities/cities.component';
import { NavComponent } from './nav/nav.component';

import {WeatherService} from './weather.service';
import { AppRoutingModule } from './app-routing.modules';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanJoseComponent,
    BurbankComponent,
    DallasComponent,
    WashingtonDCComponent,
    ChicagoComponent,
    CitiesComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
