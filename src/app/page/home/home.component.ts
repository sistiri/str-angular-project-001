import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Home';
  
  @Input() product: Product = new Product;

  productList: Product[] = this.productService.list;
  currentProduct: Product = new Product();
  phrase: string = '';
  

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
