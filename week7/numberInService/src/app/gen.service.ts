import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenService {
  numbersA: number[]=[2];
  numbersB: number[]=[1];
  ranN : number =null;
  sumA: number =null;
  sumB: number =null;
  constructor() { }

  genOneRandomN(data) {
    this.ranN = Math.floor(Math.random()*20)
    if(data ===this.numbersA){

      this.numbersA.push(this.ranN)
    }else{
      this.numbersB.push(this.ranN)
    }
  }

  getNumberA():number[]{
    return this.numbersA;
  }
  getNumberB():number[]{
    return this.numbersB;
  }
  // getSum():number{
  //   return this.sum;
  // }


  getDifference(){
    console.log('clicked')
    for (let n of this.numbersA){
      this.sumA = this.sumA+n;
    }
    for (let n of this.numbersB){
      this.sumB = this.sumB+n;
    }
    console.log(this.sumA, this.sumB)

    const difference: number = this.sumA - this.sumB;
    this.sumA=0;
    this.sumB=0;

    console.log(difference)
    return difference;



  }

}
