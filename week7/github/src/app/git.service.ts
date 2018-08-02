import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  api = 'https://api.github.com/users'
  // user.username = 'limitlessx';
  tasks: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(private _http: HttpClient) {
    // this.retrieveTask(user);
  }

  retrieveTask(user: {[key:string]:(string)}){
    this._http.get(this.api +'/'+ user.username ).subscribe(
      (task: GitUser) =>{
        const newScore = task.public_repos +task.followers
        this.tasks.next(newScore)
        console.log("==================>",task)
      },
      (error) =>{console.log('Oops....not found')}
    );
    console.log("service => LeftComponent");
  }

  updatedTask(user){
    console.log("udpatedTask Service => components")
    this._http.get(this.api +'/'+ user.username, user).subscribe(
      (response) => {this.retrieveTask(user)}
    );
    console.log('full_url--> ', this.api +'/'+ user.username)
  }


}

interface GitUser{
  public_repos: number;
  followers: number;
}
