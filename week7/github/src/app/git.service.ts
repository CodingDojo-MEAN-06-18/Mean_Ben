import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  api = 'https://api.github.com/users'
  // user.username = 'limitlessx';
  tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private _http: HttpClient) {
    // this.retrieveTask(user);
  }

  retrieveTask(user: {[key:string]:(string)}){
    this._http.get(this.api +'/'+ user.username ).subscribe(
      (task: any[]) =>{
        this.tasks.next(task)
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
