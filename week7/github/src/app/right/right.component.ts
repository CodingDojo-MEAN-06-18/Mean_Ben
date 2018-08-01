import { Component, OnInit } from '@angular/core';
import {GitService} from "../git.service";

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  tasks: any=[];
  score: number =0;
  userExist = false;
  constructor(private _gitService: GitService) { }

  ngOnInit() {
    this._gitService.tasks.subscribe(
      //(tasks) =>{this.tasks = tasks}
      (tasks:any) =>{
      this.userExist = true;
      this.score =tasks.public_repos + tasks.followers
    }
    );
  }
//,(response: Response) =>this.userExist = false


}
