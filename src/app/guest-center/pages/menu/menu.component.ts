import {Component, OnInit} from '@angular/core';
import {FOODITEMS, TETITEMS} from './menu-food-items';
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

    tetEndDate = new Date('February 11 2019');
    tetEventToggle: boolean;
    tetItems;

    constructor() {
    }

    ngOnInit() {
        const now = new Date();
        this.tetEventToggle = this.tetEndDate > now;
        this.tetEvent();
    }

    tetEvent() {
        if (this.tetEventToggle === true) {
            this.tetItems = TETITEMS;
        }
    }


}
