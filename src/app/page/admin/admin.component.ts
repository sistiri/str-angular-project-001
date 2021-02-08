import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  @Input() productList$: Observable<Product[]> = this.productService.getAll();

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
  }

  onUpdate(product: Product): void {
    this.productService.update(product).subscribe;
  }

  onDelete(product: Product): void {
    this.productService.remove(product).subscribe;
  }

  onPlus(product: Product): void {
    this.productService.add(product).subscribe;
  }

}
