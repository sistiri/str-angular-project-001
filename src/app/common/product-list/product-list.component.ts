import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  title = 'Product List';

  @Input() phraseString: string = '';
  @Input() product: Product = new Product();
  // @Input() list: Product[] = [];

  productList: Product[] = this.productService.list;
  currentProduct: Product = new Product();
  phrase: string = '';

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  onSelectProduct(product: Product): void {
    this.currentProduct = product;
  }
}
