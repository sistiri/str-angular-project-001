import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product(0, 0, 'XY', 'XY', 'src\assets\img\jegtoro.JPG', 0, 0, true, true)

  constructor() {
    console.log(this.product);
  }
  
  ngOnInit(): void {
    console.log(this.product);
  }

}
