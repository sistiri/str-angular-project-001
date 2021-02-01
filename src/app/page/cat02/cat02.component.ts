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
  @Input() catId: number = null;

  @Input() currentProduct: Product = new Product();
  phrase: string = '';
  
  @Input() topFiveFeaturedRedProducts: Product[] = this.productList.filter( product => product.featured && product.catId === 2 )
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
