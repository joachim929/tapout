import {Component, OnInit} from '@angular/core';

// Models
import {MenuCategory} from './menu-category.model';

// Services
import {UpdateMenuService} from './update-menu.service';
import {MenuDataService} from './menu-data.service';
import {NotificationService} from '../../shared/notification.service';
import {TaskRouteService} from '../../shared/task-route.service';

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
                private taskRouteService: TaskRouteService) {

        this.gotData = false;
        this.taskRouteService.toggleAllOff();
    }

    get editItemToggle(): boolean {
        return this.taskRouteService.editItemToggle;
    }

    set editItemToggle(boolValue: boolean) {
        this.taskRouteService.editItemToggle = boolValue;
    }

    get editCategoryToggle(): boolean {
        return this.taskRouteService.editCategoryToggle;
    }

    set editCategoryToggle(boolValue: boolean) {
        this.taskRouteService.editCategoryToggle = boolValue;
    }

    get newCategoryToggle(): boolean {
        return this.taskRouteService.newCategoryToggle;
    }

    set newCategoryToggle(boolValue: boolean) {
        this.taskRouteService.newCategoryToggle = boolValue;
    }

    get newItemToggle(): boolean {
        return this.taskRouteService.newItemToggle;
    }

    set newItemToggle(boolValue: boolean) {
        this.taskRouteService.newItemToggle = boolValue;
    }


    get menuData(): MenuCategory[] {
        return this.menuDataService.menuData;
    }

    get updating(): boolean {
        return this.updateMenuService.updating;
    }

    ngOnInit() {
        this.getData();
        this.taskRouteService.baseNav = 'edit/menu';
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
        this.taskRouteService.toggleNewItem();
    }

    toggleNewCategory() {
        this.taskRouteService.toggleNewCategory();
    }

    toggleEditItem() {
        this.taskRouteService.toggleEditItem();
    }

    toggleEditCategory() {
        this.taskRouteService.toggleEditCategory();
    }
}
