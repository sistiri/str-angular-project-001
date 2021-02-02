import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  list: Category [] = [
    { id: 1, name: 'Blue Products', description: 'Blue is all around...'},
    { id: 2, name: 'Red Products', description: 'Red is all around...'},
  ];

  constructor() { }
}
