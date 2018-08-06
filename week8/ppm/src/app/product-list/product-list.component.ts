import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsList: any[] = [];
  constructor(private productService:ProductService, private router:Router ) {

  }

  ngOnInit() {
    this.productsList=this.productService.getProducts();
    console.log(this.productsList)
  }

  onEdit(id:number){
    console.log("editing: ",id);
    // this.router.navigate(['products','edit'])
    this.router.navigateByUrl(`/products/edit/${id}`)
  }
  onDele(product){
    console.log("deleting: ",product);
    this.productService.deleProdct(product)
    this.router.navigateByUrl('/products')
    console.log('==>back')
  }

}
