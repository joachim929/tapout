import {Component, OnInit} from '@angular/core';

// Objects
import {MenuCategory} from '../menu-category.model';
import {MenuItem} from '../menu-item.model';

// Services
import {NotificationService} from '../../../shared/notification.service';
import {MenuDataService} from '../menu-data.service';
import {UpdateMenuService} from '../update-menu.service';
import {TaskRouteService} from '../../../shared/task-route.service';

@Component({
    selector: 'app-new-menu-item',
    templateUrl: './new-menu-item.component.html',
    styleUrls: ['./new-menu-item.component.css']
})
export class NewMenuItemComponent implements OnInit {
    model: MenuItem;
    categories: MenuCategory[];
    hideTableHints = true;
    selectedCategory: MenuCategory;

    constructor(private updateMenuService: UpdateMenuService,
                private menuDataService: MenuDataService,
                private notificationService: NotificationService,
                private menuRouteService: TaskRouteService) {
        this.menuRouteService.newItemToggle = true;
    }

    get menuData() {
        return this.menuDataService.menuData;
    }

    get updating(): boolean {
        return this.updateMenuService.updating;
    }

    ngOnInit() {
        this.model = new MenuItem();
        this.model.disableDescription = false;
    }

    public toggleTableHints(formInvalid) {
        if (formInvalid) {
            this.hideTableHints = !this.hideTableHints;
            setTimeout(() => {
                this.hideTableHints = true;
            }, 5000);
        }

    }

    public formatCategoryId(): void {
        this.model.categoryId = +this.model.categoryId;
        this.selectedCategory = this.menuDataService.getMenuCategoryById(this.model.categoryId);

        if (typeof this.model.position !== 'undefined') {
            this.formatPosition();
        }
    }

    public formatPosition(): void {
        let catLength: number;
        if (this.selectedCategory.items === null) {
            catLength = 1;
        } else {
            catLength = this.selectedCategory.items.length + 1;
        }

        this.model.position = this.model.position = Math.round(this.model.position);
        if (this.model.position < 1 ||
            this.model.position > catLength) {
            this.model.position = catLength;
        }
    }

    public saveItem(form): void {
        const newMenuItem = new MenuItem();
        newMenuItem.categoryId = form.value.category;
        newMenuItem.enTitle = this.model.enTitle;
        newMenuItem.position = this.model.position;
        newMenuItem.price = this.model.price;
        newMenuItem.vnTitle = this.model.vnTitle;

        if (!this.model.disableDescription) {
            newMenuItem.enDescription = this.model.enDescription;
            newMenuItem.vnDescription = this.model.vnDescription;
        } else {
            newMenuItem.enDescription = null;
            newMenuItem.vnDescription = null;
        }

        this.updateMenuService.newCategoryItem(newMenuItem)
            .subscribe(response => {
                if (typeof response !== 'undefined') {
                    if (response.success === true) {
                        this.menuDataService.addMenuItemToCategory(response.data);

                        this.notificationService.addMessage('Added new item to ' + response.data.enTitle);
                        this.menuRouteService.routeToMenu();
                    } else {
                        this.notificationService.addMessage('Failed to add a new item');
                    }
                } else {
                    this.notificationService.addMessage('Whoops, something went wrong');
                }
                this.updateMenuService.updating = false;

            }, (error) => {
                this.updateMenuService.updating = false;
                this.notificationService.addMessage('Failed to create a New Menu Item');
            });
    }
}
