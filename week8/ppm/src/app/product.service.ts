import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { productsList } from './data/product-data'
import { Product } from './product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // product: any = new Product();
  constructor() { }
  //Crud - create, read, update and destroy
  getProducts(){
    return productsList;
  }
  // get one book
  getProduct(productId:string){
    for(let product of productsList){
      const strProduct = (product.id).toString()
      if(strProduct ===productId){
        return product;
      }
    }
  }

  createProdct(product){
    console.log('creating product',product)
     productsList.push(product)
  }
  updateProdct(product: Product){
    console.log('updating product', product.id)
    for(let productL of productsList){
      if(productL.id ===product.id){
        console.log('============>',product)
        productL = product
        // return product;
      }
    }

  }
  deleProdct(product): void{
    console.log('destroy product',product )
    const idex = productsList.indexOf(product)
    productsList.splice(idex,1)


  }






}
