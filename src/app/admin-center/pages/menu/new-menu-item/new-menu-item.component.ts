import {Component, OnInit} from '@angular/core';

// Objects
import {NewMenuItem, Category} from './new-menu-item.model';

// Services
import {GetInfoService} from '../../../shared/get-info.service';

@Component({
    selector: 'app-new-menu-item',
    templateUrl: './new-menu-item.component.html',
    styleUrls: ['./new-menu-item.component.css']
})
export class NewMenuItemComponent implements OnInit {
    model: NewMenuItem;
    categories: Array<Category>;

    constructor(private getInfoService: GetInfoService) {
    }

    ngOnInit() {
        this.model = new NewMenuItem();
        this.model.disableDescription = false;
        if (typeof this.categories === 'undefined') {
            this.getData();
        }
    }

    getData() {
        this.getInfoService.getCategories('getCategories', 'Menu')
            .subscribe(response => {
                this.categories = response;
                console.log(this.categories);
            });
    }


}
