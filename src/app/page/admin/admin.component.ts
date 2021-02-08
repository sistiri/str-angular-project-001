import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
  }

  onUpdate(product: Product): void {
    this.productService.update(product);
  }

  onDelete(product: Product): void {
    this.productService.remove(product);
  }

  onPlus(product: Product): void {
    this.productService.add(product);
  }

}
