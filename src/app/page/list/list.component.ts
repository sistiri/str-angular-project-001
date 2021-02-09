import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() product: Product = new Product();
  
  @Input() productList$: Observable<Product[]> = this.productService.list$;

  /* keresőkifejezés*/
   phrase: string = ''

  constructor(
    private productService: ProductService,
  ) {}

  /**
   * metódus, ami kezeli a keresőkifejezést.
   * Neve: onChangePhrase
   * Működése: a this.phrase értékét beállítja az
   *  (event.target as HTMLInputElement) értékére.
   * @param event {Event} - az esemény
   * @returns {void}
   */

   onChangePhrase(event: Event): void {
     this.phrase = (event.target as HTMLInputElement).value;
   }

  ngOnInit(): void {
    this.productService.getAll();
  }

}
