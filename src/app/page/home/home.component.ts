import { Component, Input, OnInit } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

// import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Home';

  // @Input() productList$: Observable<Product[]> = this.productService.getAll();
  @Input() product: Product = new Product;

  featuredProducts$: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter( product => product.featured == true))
  )

  notFeaturedProducts$: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter( product => product.featured == false))
  )

  // currentProduct: Product = new Product();
  phrase: string = '';

  constructor(
    private productService: ProductService,
  ) { }

// Kiválasztom a kiemelt termékeket (az összes termék a products tömbben van a példa kedvéért): 
// featuredProducts: Product[] = this.productList.filter(product => product.featured);
// // Összekeverem a tömb elemeit: 
// shakedFeaturedProducts: Product[] = this.featuredProducts.sort(() => 0.5 - Math.random());
// // Kiválasztom az első ötöt:
// @Input() selectedFeaturedProducts: Product[] = this.featuredProducts.slice(0, 5);


// Ezeketet PIPE-ok helyettesitik:
// @Input() topFiveFeaturedProducts: Product[] = this.productList.filter( product => product.featured )
//     .sort( () => 0.5 - Math.random())
//     .slice(0, 5);
// @Input() topFiveNotFeaturedProducts: Product[] = this.productList.filter( product => !product.featured )
//     .sort( () => 0.5 - Math.random())
//     .slice(0, 5);

  ngOnInit(): void {
  }

}
