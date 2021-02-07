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

  appName: string = 'MPPR DVD WEBSHOP';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Vígjáték', link: '/cat01'},
    {text: 'Akció', link: '/cat02'},
    {text: 'Animációs', link: '/cat03'},
    {text: 'Kaland', link: '/cat04'},
    {text: 'Összes', link: '/all'},
    {text: 'Admin', link: '/admin'},
  ];

  cols: {key: string, text: string}[] = [
    {key: 'id', text: 'Azonosító szám'},
    {key: 'name', text: 'Film címe'},
    {key: 'catId', text: 'kategória'},
    {key: 'price', text: 'Ár'},
  ]

  constructor() { }
}
