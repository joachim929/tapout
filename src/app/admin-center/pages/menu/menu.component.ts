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

    }

    get menuData(): MenuCategory[] {
        return this.menuDataService.menuData;
    }

    get updating(): boolean {
        return this.updateMenuService.updating;
    }

    get isDisabled(): boolean {
        if (this.gotData === true) {
            return this.updating;
        } else {
            return true;
        }
    }

    ngOnInit() {
        this.getData();
        this.taskRouteService.baseNav = 'admin/menu';
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
                this.notificationService.addMessage(error + '. Couldn\'t get data from the database');
            });
    }
}
