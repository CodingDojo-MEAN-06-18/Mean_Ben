import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  newlst =[]
  colors= ['blue','red','green','black','yellow'];
  generateColor(){
    for( let _color of this.colors){
      const random_color = Math.floor(Math.random()*4)+1;
      this.newlst.push(this.colors[random_color]);
    }
  }
  ngOnInit(){
    this.generateColor();
  }


}
