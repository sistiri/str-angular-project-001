import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product'
import { ProductService } from 'src/app/service/product.service';



@Component({
  selector: 'app-product-fiver',
  templateUrl: './product-fiver.component.html',
  styleUrls: ['./product-fiver.component.scss']
})

export class ProductFiverComponent implements OnInit {

  title: 'Product Fiver';

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

  
}
