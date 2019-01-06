import {Component, OnInit} from '@angular/core';

// Services
import {GetInfoService} from '../../shared/get-info.service';
import {MenuInfoService} from './menu-info.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    test: any;

    newCategoryToggle = false;
    newItemToggle = false;

    constructor(private getInfoService: GetInfoService,
                private menuInfoService: MenuInfoService) {
    }

    ngOnInit() {
        if (typeof this.test === 'undefined') {
            this.getData();
        }
    }

    getData() {
        this.getInfoService.getPageItems('edit', 'Menu')
            .subscribe(response => {
                this.menuInfoService.setMenuData(response);
            });
    }

    newMenuItemBack(): void {
        this.newCategoryToggle = false;
        this.newItemToggle = false;
    }

}
