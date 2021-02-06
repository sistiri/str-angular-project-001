import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() product: Product = new Product();
  @Input() productList: Product[] = this.productService.list;
  @Input() phraseString: string = '';
  @Input() categoryId: number = null;
 


  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
