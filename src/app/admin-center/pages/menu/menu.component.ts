import {Component, OnInit} from '@angular/core';

// Models
import {MenuCategory} from './menu-category.model';

// Services
import {UpdateMenuService} from './update-menu.service';
import {MenuDataService} from './menu-data.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    public gotData: boolean;
    public editItemToggle: boolean;
    public editCategoryToggle: boolean;
    public newCategoryToggle: boolean;
    public newItemToggle: boolean;

    constructor(private updateMenuService: UpdateMenuService,
                private menuDataService: MenuDataService) {

        this.editItemToggle = false;
        this.editCategoryToggle = false;
        this.editItemToggle = false;
        this.newItemToggle = false;
        this.gotData = false;

    }

    get menuData(): MenuCategory[] {
        return this.menuDataService.menuData;
    }

    get updating(): boolean {
        return this.updateMenuService.updating;
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.updateMenuService.getPageItems()
            .subscribe(response => {
                if (response !== null) {
                    this.menuDataService.menuData = response;
                    this.gotData = true;
                } else {
                    this.gotData = false;
                }
            });
    }

    toggleNewItem() {
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

    toggleNewCategory() {
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

    toggleEditItem() {
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

    toggleEditCategory() {
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
