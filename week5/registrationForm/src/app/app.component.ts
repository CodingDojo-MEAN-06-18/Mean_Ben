import { User } from './user';
import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  users =[];
  onSubmit(event:Event, form: NgForm){
    event.preventDefault();
    this.users.push(this.user);
    this.user = new User();
    form.reset();
  }
}
