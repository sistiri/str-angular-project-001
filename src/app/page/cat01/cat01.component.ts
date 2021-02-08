import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  title: string = 'Blue Category'

  @Input() product: Product = new Product;
  @Input() phraseString: string = '';
  @Input() productList$: Observable<Product[]> = this.productService.getAll();
  @Input() categoryId: number = null;
  @Input() currentProduct: Product = new Product();
  phrase: string = '';
  

  cat01Products$: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter( product => product.catId === 1))
  );

  
  
  constructor(
    private productService: ProductService,
  ) { }
 

    ngOnInit(): void {
    }

 onChangePhrase(event: Event): void {
     this.phrase = (event.target as HTMLInputElement).value;
   }
}
