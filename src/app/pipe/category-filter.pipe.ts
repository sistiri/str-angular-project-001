import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value: Product[], categoryId: number): Product[] {

    if (!Array.isArray(value)) {
      return value;
    }

    return value.filter(item => item.catId === categoryId);
  }
}
