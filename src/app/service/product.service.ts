import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  
  list: Product[] = JSON.parse(JSON.stringify('../../server/db/products.json'))

  
}
