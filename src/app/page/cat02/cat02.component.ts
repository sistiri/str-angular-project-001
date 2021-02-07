import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  @Input() productList$: Observable<Product[]> = this.productService.getAll();
  @Input() catId: number = null;

  @Input() currentProduct: Product = new Product();
  phrase: string = '';


  constructor(
    private productService: ProductService,
  ) { }

  onChangePhrase(event: Event): void {
     this.phrase = (event.target as HTMLInputElement).value;
   }

  ngOnInit(): void {
  }

}
