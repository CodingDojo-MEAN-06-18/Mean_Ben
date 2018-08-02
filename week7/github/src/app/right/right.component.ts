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
      (score:number) =>{
      this.userExist = true;
      // console.log(public_repos);
      this.score =score
    }
    );
  }
//,(response: Response) =>this.userExist = false


}
