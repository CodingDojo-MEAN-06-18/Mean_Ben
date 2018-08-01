import { Component, OnInit } from '@angular/core';
import {GitService} from "../git.service";

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  user: {[key:string]:(string)} ={};
  tasks: any = []; // hold data from api
  constructor(private _gitService: GitService ) { }

  ngOnInit() {
    this._gitService.tasks.subscribe(
      (tasks) =>{this.tasks = tasks}
    );
  }

  onSubmit(event: Event, form){
    event.preventDefault();
    // this.user.username = this.user.username;
    console.log("LeftComponent => GitService");
    console.log(this.user)
    this._gitService.updatedTask(this.user);
    this.user = {};

  }

}
