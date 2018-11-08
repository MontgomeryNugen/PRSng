import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Home", "/home", "The Home Page"),
    new Menu("Users", "/users/list", "The User List"),
    new Menu("Vendors", "/vendors/list", "The Vendor List"),
    new Menu("Products", "/products/list", "The Product List"),
    new Menu("Purchase Request", "/prchrequest/list", "The Purchase Request List"),
    new Menu("Review", "/review/list", "The Review List"),
    new Menu("About", "/about", "The About Page"),
    new Menu("Login / Out", "/users/login", "The Login Page"),

  ];

  constructor() { }

  ngOnInit() {
  }

}
