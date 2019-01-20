import {Component, OnInit} from '@angular/core';

// Services
import {GetInfoService} from '../../shared/get-info.service';
import {MenuInfoService} from './menu-info.service';

// Models
import {MenuCategory} from './menu-category.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    public menuData: MenuCategory[];

    public editItemToggle: boolean;
    public editCategoryToggle: boolean;
    public newCategoryToggle: boolean;
    public newItemToggle: boolean;

    constructor(private getInfoService: GetInfoService,
                private menuInfoService: MenuInfoService) {
        this.editItemToggle = false;
        this.editCategoryToggle = false;
        this.editItemToggle = false;
        this.newItemToggle = false;
    }

    ngOnInit() {
        this.getData();
    }

    public getData() {
        this.getInfoService.getPageItems('edit', 'Menu')
            .subscribe(response => {
                this.menuData = response;
                this.menuInfoService.setMenuData(response);
            });
    }

    public toggleNewItem() {
        this.newItemToggle = !this.newItemToggle;
        if (this.newCategoryToggle) {
            this.newCategoryToggle = false;
        }
        if (this.editCategoryToggle) {
            this.editCategoryToggle = false;
        }
        if (this.editItemToggle) {
            this.editItemToggle = false;
        }
    }

    public toggleNewCategory() {
        this.newCategoryToggle = !this.newCategoryToggle;
        if (this.newItemToggle) {
            this.newItemToggle = false;
        }
        if (this.editCategoryToggle) {
            this.editCategoryToggle = false;
        }
        if (this.editItemToggle) {
            this.editItemToggle = false;
        }
    }

    public toggleEditItem() {
        this.editItemToggle = !this.editItemToggle;
        if (this.newItemToggle) {
            this.newItemToggle = false;
        }
        if (this.newCategoryToggle) {
            this.newCategoryToggle = false;
        }
        if (this.editCategoryToggle) {
            this.editCategoryToggle = false;
        }
    }

    public toggleEditCategory() {
        this.editCategoryToggle = !this.editCategoryToggle;
        if (this.newItemToggle) {
            this.newItemToggle = false;
        }
        if (this.newCategoryToggle) {
            this.newCategoryToggle = false;
        }
        if (this.editItemToggle) {
            this.editItemToggle = false;
        }
    }
}
