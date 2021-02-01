import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product = new Product();

  constructor() {
    console.log(this.product);
  }
  
  ngOnInit(): void {
    console.log(this.product);
  }

}
