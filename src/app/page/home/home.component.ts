import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Home';

  productList$: Observable<Product[]> = this.productService.getAll();
  @Input() product: Product = new Product;
  @Input() allRandomized: Observable<Product[]> = this.productService.randomize(this.productList$);
  

  currentProduct: Product = new Product();
  phrase: string = '';
  
  featuredProduct: Product[] = this.productService.getFeatured(true)
  .slice(0, 5);

  constructor(
    private productService: ProductService,
  ) { }

// Kiválasztom a kiemelt termékeket (az összes termék a products tömbben van a példa kedvéért): 
// featuredProducts: Product[] = this.productList.filter(product => product.featured);
// // Összekeverem a tömb elemeit: 
// shakedFeaturedProducts: Product[] = this.featuredProducts.sort(() => 0.5 - Math.random());
// // Kiválasztom az első ötöt:
// @Input() selectedFeaturedProducts: Product[] = this.featuredProducts.slice(0, 5);

@Input() topFiveFeaturedProducts: Product[] = this.productList.filter( product => product.featured )
    .sort( () => 0.5 - Math.random())
    .slice(0, 5);

@Input() topFiveNotFeaturedProducts: Product[] = this.productList.filter( product => !product.featured )
    .sort( () => 0.5 - Math.random())
    .slice(0, 5);

  ngOnInit(): void {
  }

}
