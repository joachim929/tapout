import {Component, OnInit} from '@angular/core';

import {FOODITEMS} from './delivery-food-items';

@Component({
    selector: 'app-delivery',
    templateUrl: './delivery.component.html',
    styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

    public foodItems = FOODITEMS;
    public vietnameseDong = '&#8363';

    constructor() {
    }

    ngOnInit() {
    }

}
