import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu = ['About Us', 'Home', 'Vinnytsia'];
  isOpen: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    this.isOpen = !this.isOpen;
  }
}
