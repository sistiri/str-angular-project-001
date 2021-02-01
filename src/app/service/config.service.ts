import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
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
  ];

  constructor() { }
}
