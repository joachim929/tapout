import {Component, OnInit} from '@angular/core';
import {FOODITEMS} from './menu-food-items';
import {DRINKITEMS} from './menu-drink-items';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    foodItems = FOODITEMS;
    drinkItems = DRINKITEMS;
    vietnameseDong = '&#8363';

    constructor() {
    }

    ngOnInit() {
    }


}
