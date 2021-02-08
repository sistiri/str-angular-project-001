import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  @Input() product: Product = new Product;
  @Input() phraseString: string = '';
  @Input() productList$: Observable<Product[]> = this.productService.getAll();
  @Input() categoryId: number = null;
  @Input() currentProduct: Product = new Product();
  phrase: string = '';

  cat02Products$: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter( product => product.catId === 2))
  );


  constructor(
    private productService: ProductService,
  ) { }

  onChangePhrase(event: Event): void {
     this.phrase = (event.target as HTMLInputElement).value;
   }

  ngOnInit(): void {
  }

}
