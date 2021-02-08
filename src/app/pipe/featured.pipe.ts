import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(sourceArray: Product[]): unknown {
    
    if (!Array.isArray(sourceArray)) {
      return sourceArray;
    };

    return sourceArray.filter(item => item.featured);
    
  }

}
