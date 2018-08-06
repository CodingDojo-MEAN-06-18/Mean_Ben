import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product} from '../../product'
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    product: Product
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
      console.log(params.get('productId'));
      this.product = this.productService.getProduct(params.get('productId'))
        // .subscribe(product => (this.product = product))
    });

  }
  onUpdate(event:Event, form: NgForm){
    event.preventDefault;
    console.log('updating form',this.product);
    this.productService.updateProdct(this.product);
    // this.ppm.push(form.value);
    // console.log(this.ppm);
    // this.ppm =[];
    this.router.navigateByUrl('/products');
  }


}
