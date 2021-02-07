import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform(sourceArray: Product[]): Product[] {
    
    if (!Array.isArray(sourceArray)) {
      return sourceArray;
    };

    return sourceArray.sort(() => Math.random() - 0.5);
  }
}
