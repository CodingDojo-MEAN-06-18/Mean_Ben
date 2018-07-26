import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks = ["abc", '123',"a1a"]

  invoked(event){
    console.log('invoking',event);
  }







  constructor() { }

  ngOnInit() {
  }

}
