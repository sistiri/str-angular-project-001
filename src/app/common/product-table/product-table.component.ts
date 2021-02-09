import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';



@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})

export class ProductTableComponent implements OnInit {

  title = 'Product Table';

  @Input() phraseString: string = '';
  @Input() product: Product = new Product();
  @Input() categoryId: number = null;
  @Input() productList$: Observable<Product[]> = this.productService.list$;
  @Input() currentProduct: Product = new Product();
  


  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  onSelectProduct(product: Product): void {
    this.currentProduct = product;
  }
}
