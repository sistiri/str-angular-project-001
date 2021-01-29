import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-project001';

  product: Product[] = [
    new Product(0, 0, 'XY', 'XY', 'src\assets\img\jegtoro.JPG', 0, 0, true, true),
    new Product(1, 1, 'XY', 'XY', 'src\assets\img\jegtoro.JPG', 0, 0, true, true),
    new Product(2, 2, 'XY', 'XY', 'src\assets\img\jegtoro.JPG', 0, 0, true, true),
  ];
}
