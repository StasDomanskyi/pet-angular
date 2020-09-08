import { Component, OnInit } from '@angular/core';
import { IMenu } from '../../interfaces/IMenu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: IMenu = [
    {
      name: 'About Us',
      link: '/about-us',
    },
    {
      name: 'Vinnytsia History',
      link: '/city',
    },
    {
      name: 'City Map',
      link: '/map',
    },
  ];
  isOpen: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    this.isOpen = !this.isOpen;
  }
}
