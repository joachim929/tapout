import {Component, OnInit} from '@angular/core';

// Objects
import {MenuCategory} from '../menu-category.model';

// Services
import {UpdateMenuService} from '../update-menu.service';
import {MenuDataService} from '../menu-data.service';
import {NotificationService} from '../../../shared/notification.service';
import {TaskRouteService} from '../../../shared/task-route.service';

@Component({
    selector: 'app-new-menu-category',
    templateUrl: './new-menu-category.component.html',
    styleUrls: ['../menu.component.css']
})
export class NewMenuCategoryComponent implements OnInit {

    public model: MenuCategory;
    public showInfo: boolean;

    private highestPagePosition: number;


    constructor(private menuDataService: MenuDataService,
                private updateMenuService: UpdateMenuService,
                private notificationService: NotificationService,
                private menuRouteService: TaskRouteService) {

        this.highestPagePosition = 0;
        this.model = new MenuCategory();
        this.menuRouteService.newCategoryToggle = true;
    }

    get menuData(): MenuCategory[] {
        return this.menuDataService.menuData;
    }

    get updating(): boolean {
        return this.updateMenuService.updating;
    }

    get highestPosition(): number {
        return this.highestPagePosition + 1;
    }

    ngOnInit() {
        this.showInfo = false;
        this.setHighestPagePosition();
    }

    goBack() {
        this.menuRouteService.routeToMenu();
    }

    formatPagePosition() {
        this.setHighestPagePosition();
        this.model.position = Math.round(this.model.position);
        if (this.model.position > this.highestPosition) {
            this.model.position = this.highestPosition;
        } else if (this.model.position < 1) {
            this.model.position = 1;
        }
    }

    toggleShowInfo(): void {
        if (typeof this.menuData !== 'undefined') {
            if (this.highestPagePosition === 0) {
                this.setHighestPagePosition();
            }
        }
        this.showInfo = true;
        setTimeout(() => {
            this.showInfo = false;
        }, 5000);
    }

    initializeNewCategory(categoryForm): void {
        if (categoryForm.valid) {
            this.updateMenuService.createNewCategory(this.model)
                .subscribe(response => {
                    if (response.success && response.data !== null) {

                        this.updateMenuService.updating = false;
                        this.updateMenuService.getPageItems()
                            .subscribe(data => {
                                this.menuDataService.menuData = data;
                            }, error => this.notificationService.addMessage('Couldn\'t get page items'));

                        this.model = new MenuCategory();
                        this.goBack();
                        this.notificationService.addMessage('New category created');
                    }
                }, (error) => {
                    this.updateMenuService.updating = false;
                    this.notificationService.addMessage('Something went wrong creating a new category');
                });
        }
    }

    private setHighestPagePosition() {
        if (typeof this.menuData !== 'undefined') {
            for (const category of this.menuData) {
                if (category.position > this.highestPagePosition) {
                    this.highestPagePosition = category.position;
                }
            }
        }
    }


}
