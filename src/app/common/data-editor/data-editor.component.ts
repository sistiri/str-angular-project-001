import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/model/product';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  phrase: string = '';
  
  cols: ITableCol[] = this.config.tableCols;
  filterKey: string = 'name';
  filterKeys: string[] = Object.keys(new Product())

  @Input() product: Product = new Product();
  @Input() productList$: Observable<Product[]> = this.productService.list$;
  @Output() delProduct: EventEmitter<Product> = new EventEmitter();
  @Output() updateProduct: EventEmitter<Product> = new EventEmitter();
  @Output() addProduct: EventEmitter<Product> = new EventEmitter();

  constructor(
    private config: ConfigService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  onUpdateClick(product: Product): void {
    this.updateProduct.emit(product);
  }

  onDeleteClick(product: Product): void {
    this.delProduct.emit(product);
  }

  onPlusClick(product: Product): void {
    this.addProduct.emit(product);
  }


}
