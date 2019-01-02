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
        this.getInfoService.setPage('Menu');
        this.getInfoService.setTask('edit');
        if (typeof this.test === 'undefined') {
            this.getData();
        }
    }

    getData() {
        this.getInfoService.getPageItems().subscribe(response => {
            this.test = response;
        });
    }

    newMenuItemBack(): void {
        this.newCategoryToggle = false;
        this.newItemToggle = false;
    }

}
