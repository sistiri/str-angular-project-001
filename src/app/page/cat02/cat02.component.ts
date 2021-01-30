import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  @Input() product: Product = new Product;
  @Input() phraseString: string = '';
  @Input() productList: Product[] = this.productService.list;

  currentProduct: Product = new Product();
  phrase: string = '';
  

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
