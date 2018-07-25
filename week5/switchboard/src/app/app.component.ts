import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SwitchBoard';
  switches =[true, true, true, true, true, true, true, true, true, true];

pressSwitch(i){
  this.switches[i] = !this.switches[i]
}
















}
