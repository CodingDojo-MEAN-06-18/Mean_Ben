import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Author} from "./author"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  author: object = new Author()
  quoteCollection=[]
  delEvent(quote){
    const idex = this.quoteCollection.indexOf(quote);
    this.quoteCollection.splice(idex,1)
  }

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    this.quoteCollection.push(this.author);
    console.log(this.author)
    this.author = new Author();
    form.reset();

  }



















}
