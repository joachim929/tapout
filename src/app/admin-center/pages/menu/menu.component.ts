import {Component, OnInit} from '@angular/core';

import {GetInfoService} from '../../shared/get-info.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    test: any;

    newCategoryToggle = false;
    newItemToggle = false;

    constructor(private getInfoService: GetInfoService) {
    }

    ngOnInit() {
        if (typeof this.test === 'undefined') {
            this.getData();
        }
    }

    getData() {
        this.getInfoService.getPageItems('edit', 'Menu')
            .subscribe(response => {
                this.test = response;
                console.log(this.test);
            });
    }

    newMenuItemBack(): void {
        this.newCategoryToggle = false;
        this.newItemToggle = false;
    }

}
