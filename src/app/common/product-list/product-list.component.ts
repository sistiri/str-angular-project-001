import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() phraseString: string = '';
  @Input() product: Product = new Product();
  @Input() categoryId: number = null;
  @Input() productList$: Observable<Product[]> = this.productService.getAll();
  @Input() currentProduct: Product = new Product();
 


  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
