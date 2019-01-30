import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// Objects
import {MenuCategory} from '../menu-category.model';

// Services
import {UpdateMenuService} from '../update-menu.service';
import {MenuDataService} from '../menu-data.service';
import {NotificationService} from '../../../shared/notification.service';

@Component({
    selector: 'app-new-menu-category',
    templateUrl: './new-menu-category.component.html',
    styleUrls: ['../menu.component.css']
})
export class NewMenuCategoryComponent implements OnInit {
    _componentToggle: boolean;

    @Output()
    newCatComponentToggleChange = new EventEmitter<boolean>();

    @Input()
    get newCatComponentToggle(): boolean {
        return this._componentToggle;
    }

    set newCatComponentToggle(val: boolean) {
        this._componentToggle = val;
        this.newCatComponentToggleChange.emit(this.newCatComponentToggle);
    }

    public model: MenuCategory;
    public showInfo: boolean;

    private highestPagePosition: number;


    constructor(private menuDataService: MenuDataService,
                private updateMenuService: UpdateMenuService,
                private notificationService: NotificationService) {

        this.highestPagePosition = 0;
        this.model = new MenuCategory();
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
                        this.menuData.push(response.data);
                        this.menuDataService.sortMenu();
                        this.model = new MenuCategory();
                        this.newCatComponentToggle = false;
                        this.notificationService.addMessage('New category created');
                    } else {
                        this.notificationService.addMessage('Failed to add new category');
                    }

                    this.updateMenuService.updating = false;
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
