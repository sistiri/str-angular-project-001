import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product'
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-fiver',
  templateUrl: './product-fiver.component.html',
  styleUrls: ['./product-fiver.component.scss']
})
export class ProductFiverComponent implements OnInit {

  @Input() product: Product = new Product();

  @Input() productList: Product[] = this.productService.list;

  constructor(
    private productService: ProductService,
  ) { }


ngOnInit(): void {
}

}
