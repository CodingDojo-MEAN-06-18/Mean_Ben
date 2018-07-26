import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() myTask;
  @Output() myEvent= new EventEmitter();

  callParent(){
    this.myEvent.emit(1000);
  }


  constructor() { }

  ngOnInit() {
  }

}
