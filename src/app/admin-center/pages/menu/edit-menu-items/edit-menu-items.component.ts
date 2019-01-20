import {Component, Input, OnInit} from '@angular/core';

import {MenuCategory} from '../menu-category.model';

@Component({
  selector: 'app-edit-menu-items',
  templateUrl: './edit-menu-items.component.html',
  styleUrls: ['./edit-menu-items.component.css']
})
export class EditMenuItemsComponent implements OnInit {
  @Input() menuData: MenuCategory[];
  constructor() { }

  ngOnInit() {
  }

}
