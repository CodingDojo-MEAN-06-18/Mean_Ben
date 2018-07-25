import { User } from './user';
import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  template ="";
  user = new User();
  users =[];
  onSubmit(event:Event, form: NgForm){
    event.preventDefault();
    this.users.push(this.user);
    this.user = new User();
    this.template ="Thank for registering with us.",this.users," We just sent you a confirmation email at, and will send all mail to.   Have a wonderful day!"
    form.reset();
  }
}
