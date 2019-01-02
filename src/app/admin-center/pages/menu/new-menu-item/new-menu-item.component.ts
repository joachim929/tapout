import { Component, OnInit } from '@angular/core';

import {NewMenuItem} from './new-menu-item';

@Component({
  selector: 'app-new-menu-item',
  templateUrl: './new-menu-item.component.html',
  styleUrls: ['./new-menu-item.component.css']
})
export class NewMenuItemComponent implements OnInit {
  model: NewMenuItem;

  categories = [
      'Breakfast', 'Burgers', 'Sandwiches', 'Mains', 'Sides', 'Desserts'
  ];

  constructor() { }

  ngOnInit() {
    this.model = new NewMenuItem();
    this.model.disableDescription = false;
  }


}
