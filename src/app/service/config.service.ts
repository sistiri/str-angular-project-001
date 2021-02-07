import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

export interface ITableCol {
  key: string;
  text: string;
  editable?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'GREEN Shop';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'BLUE Products', link: '/cat01'},
    {text: 'RED Products', link: '/cat02'},
    {text: 'ALL Products', link: '/list'},
    {text: 'Admin', link: '/admin'},
  ];

  tableCols: ITableCol[] = [
    {key: 'id', text: '#', editable: false},
    {key: 'catID', text: 'CatId', editable: false},
    {key: 'name', text: 'Name', editable: false},
    {key: 'description', text: 'Description', editable: true},
    {key: 'price', text: 'Price', editable: true},
    {key: 'stock', text: 'Stock', editable: true},
    {key: 'featured', text: 'Featured', editable: true},
    {key: 'action', text: 'Action', editable: true}
  ]; 

  constructor() { }
}
