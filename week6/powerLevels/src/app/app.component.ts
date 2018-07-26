import { PowerLevel }  from "./power-level";
import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  pwl = new PowerLevel();
  pwcollection =[]
  human: any ='';
  saiyan: any ='';
  superSaiyan: any ='';
  superSaiyanTwo: any ='';
  superSaiyanThree: any ='';
  superSaiyanFour: any ='';


  onSubmit(){
    event.preventDefault();
    this.human = this.pwl
    this.saiyan = this.pwl.inputPowerN * 10
    this.superSaiyan = this.pwl.inputPowerN * 90
    console.log(this.superSaiyan)
    this.superSaiyanTwo = this.pwl.inputPowerN * 150
    this.superSaiyanThree = this.pwl.inputPowerN * 250
    this.superSaiyanFour = this.pwl.inputPowerN * 500

    this.pwl = new PowerLevel()
  }






}
