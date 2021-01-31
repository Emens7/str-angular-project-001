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
    {text: 'Animációs', link: '/anim'},
    {text: 'Horror', link: '/horror'},
  ];

  constructor() { }
}
