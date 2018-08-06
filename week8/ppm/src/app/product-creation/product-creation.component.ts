import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { productsList } from '../data/product-data';
import {Router} from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product'
@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {
  // ppm: any[] = productsList;
  product: Product = new Product();
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
  }

  onSumit(event:Event, form: NgForm){
    event.preventDefault;
    console.log('submitting form',this.product);
    this.productService.createProdct(this.product);
    // this.ppm.push(form.value);
    // console.log(this.ppm);
    // this.ppm =[];
    this.router.navigateByUrl('/products');
  }

}
