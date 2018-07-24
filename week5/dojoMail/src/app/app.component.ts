import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  contents:{[key:string]:(string|boolean)}[] =[
    {
      email: 'Bill@gates.com',
      importance:true,
      subject:'new windows',
      content:'windonws XI will launch in year 2010'
    },
    {
      email: 'aDSa@lovelace.com',
      importance:true,
      subject:'programming',
      content:'enchancetress of numbers'
    },
    {
      email: 'John@camera.com',
      importance:false,
      subject:'updated algo',
      content:'new algorithm for shadow volumes'
    },
    {
      email: 'Gabe@newel.com',
      importance:false,
      subject:'hl3',
      content:'Just Kidding....'
    },

  ]

}
