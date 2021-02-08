import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() phraseString: string = '';
  @Input() product: Product = new Product();
  @Input() categoryId: number = null;
  @Input() productList$: Observable<Product[]> = this.productService.getAll();
  @Input() currentProduct: Product = new Product();
  // @Output() buyProduct: EventEmitter<Product> = new EventEmitter()

  constructor(
    private productService: ProductService,
  ) { }


  ngOnInit(): void {
  }

  // onBuyClick(product: Product): void {
  //   this.buyProduct.emit(product)
  // }
}
