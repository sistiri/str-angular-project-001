import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  title: string = 'Blue Category'

  @Input() product: Product = new Product;
  @Input() phraseString: string = '';
  @Input() productList: Product[] = this.productService.list;
  @Input() catId: number = null;

  @Input() currentProduct: Product = new Product();
  phrase: string = '';
  
  @Input() topFiveFeaturedBlueProducts: Product[] = this.productList.filter( product => product.featured && product.catId === 1 )
  // .filter( product => product.catId = 1 )
  .sort( () => 0.5 - Math.random())
  .slice(0, 5);

  constructor(
    private productService: ProductService,
  ) { }

  onChangePhrase(event: Event): void {
     this.phrase = (event.target as HTMLInputElement).value;
   }

    ngOnInit(): void {
    }

}
