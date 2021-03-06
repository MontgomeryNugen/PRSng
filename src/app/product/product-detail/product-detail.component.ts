import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  delete(): void {
    this.productsvc.remove(this.product)
    .subscribe(resp => {
      console.log("resp:", resp);
      this.router.navigateByUrl('/products/list');
    });
  }

  constructor(
     private productsvc: ProductService,
     private route: ActivatedRoute,
     private router: Router
     ) { }

  ngOnInit() {
    //gets the :id from the route
    let id = this.route.snapshot.params.id;
    // get the user from the user service
    this.productsvc.get(id)
    .subscribe(resp => {
      console.log("resp", resp);
      this.product = resp.data;
    });
  }

}
