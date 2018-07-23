let myNum: number = 5;
let myString : string = 'Hello Unverse';
let myArr : number[] =[1,2,3,4];
let myObj: { [key: string]: (string | number) } = { name: 'Bill' };
let anythingVariable : any = '5';
anythingVariable = 25;
let arrayOne : boolean[] = [true, false, true, true];
let arrayTwo  : (number | string | boolean)[]= [1, 'abc', true, 2];
//let myObj  : number = 5;


// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());

class myNode {

  private _priv: number;

  constructor(public val: number){}

  doSth(): void {
    this._priv =10;
  }
}


// myNodeInstance = new MyNode(1);

const myNodeInstance: myNode = new myNode(1);

// console.log(myNodeInstance.val);

console.log(myNodeInstance.val)

// function myFunction() {
//     console.log("Hello World");
//     return;
// }

function myFunction(): void{
  console.log("Hello World");
}

// function sendingErrors() {
// 	throw new Error('Error message');
// }
function sendingErrors(): never{
  throw new Error('Error message');
}
