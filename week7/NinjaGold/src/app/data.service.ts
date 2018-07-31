import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ninjaArray: any= [];
  total: number = 0;

  constructor() { }
  getNinjaArr(){
    return this.ninjaArray;
  }

  getTotal(){
    for(let n of this.ninjaArray ){
      this.total = this.total + n.gold;
    }
    console.log(this.total);
    this.total=0;
    return this.total;
  }

  pushOneN(n){
    this.ninjaArray.push(n);
    console.log(this.ninjaArray)
  }

  getRandomN(location){
    if(location ==="farm"){
      this.pushOneN({
        location:"you have earned gold at the " + location,
        gold: Math.floor(Math.random()*4)+2
      })

    }else if(location ==="cave"){
      this.pushOneN({
        location:"you have earned gold at the " + location,
        gold: Math.floor(Math.random()*5)+6
      })
    }else if(location ==="casino"){
      let gainOrLost: number =Math.floor(Math.random()*2);
      if(gainOrLost===0){
        this.pushOneN({
          location:"you have earned gold at the " + location,
          gold: Math.floor(Math.random()*100)+1
        })
      } else {
        this.pushOneN({
          location:"haha you lost " + location,
          gold: Math.floor(Math.random()*100)+1
        })
      }


    }else if(location ==="house"){
      this.pushOneN({
        location:"you have earned gold at the " + location,
        gold: Math.floor(Math.random()*7)+9
      })
    }

  }







}
