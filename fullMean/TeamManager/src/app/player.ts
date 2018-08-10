export class Player {
  constructor(
    public id:number = Math.floor(Math.random()*1000),
    public name?: string,
    public position?: string,
    public game:any =  {
      1 :{
        default: [0, 0, 0]
      },
      2:{
        default: [0, 0, 0]
      },
      3:{
        default: [0, 0, 0]
      },

    }
  ){}
}
