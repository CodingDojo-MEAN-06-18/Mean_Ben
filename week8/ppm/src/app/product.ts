export class Product {
  constructor(
    public id: number = Math.floor(Math.random()*1000),
    public title?: string,
    public price?: number,
    public url?: string

  ){}
}
