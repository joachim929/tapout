import {Component, OnInit} from '@angular/core';

// Models
import {MenuCategory} from './menu-category.model';

// Services
import {UpdateMenuService} from './update-menu.service';
import {MenuDataService} from './menu-data.service';
import {NotificationService} from '../../shared/notification.service';
import {MenuRouteService} from './menu-route.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    public gotData: boolean;

    constructor(private updateMenuService: UpdateMenuService,
                private menuDataService: MenuDataService,
                private notificationService: NotificationService,
                private menuRouteService: MenuRouteService) {

        this.gotData = false;
        this.menuRouteService.toggleAllOff();
    }

    get editItemToggle(): boolean {
        return this.menuRouteService.editItemToggle;
    }

    set editItemToggle(boolValue: boolean) {
        this.menuRouteService.editItemToggle = boolValue;
    }

    get editCategoryToggle(): boolean {
        return this.menuRouteService.editCategoryToggle;
    }

    set editCategoryToggle(boolValue: boolean) {
        this.menuRouteService.editCategoryToggle = boolValue;
    }

    get newCategoryToggle(): boolean {
        return this.menuRouteService.newCategoryToggle;
    }

    set newCategoryToggle(boolValue: boolean) {
        this.menuRouteService.newCategoryToggle = boolValue;
    }

    get newItemToggle(): boolean {
        return this.menuRouteService.newItemToggle;
    }

    set newItemToggle(boolValue: boolean) {
        this.menuRouteService.newItemToggle = boolValue;
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
            .subscribe(data => {
                this.updateMenuService.updating = false;

                if (data !== null) {
                    this.gotData = true;
                    this.menuDataService.menuData = data;
                } else {
                    this.gotData = false;
                }
            }, error => {
                this.notificationService.addMessage(error);
            });
    }

    toggleNewItem() {
        this.menuRouteService.toggleNewItem();
    }

    toggleNewCategory() {
        this.menuRouteService.toggleNewCategory();
    }

    toggleEditItem() {
        this.menuRouteService.toggleEditItem();
    }

    toggleEditCategory() {
        this.menuRouteService.toggleEditCategory();
    }
}
