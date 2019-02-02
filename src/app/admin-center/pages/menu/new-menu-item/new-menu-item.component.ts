import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// Objects
import {NewMenuItem, Category} from './new-menu-item.model';
import {MenuCategory} from '../menu-category.model';

// Services
import {NotificationService} from '../../../shared/notification.service';
import {MenuDataService} from '../menu-data.service';
import {UpdateMenuService} from '../update-menu.service';

@Component({
    selector: 'app-new-menu-item',
    templateUrl: './new-menu-item.component.html',
    styleUrls: ['./new-menu-item.component.css']
})
export class NewMenuItemComponent implements OnInit {

    _componentToggle: boolean;

    @Output()
    newItemComponentToggleChange = new EventEmitter<boolean>();

    @Input()
    get newItemComponentToggle(): boolean {
        return this._componentToggle;
    }

    get updating(): boolean {
        return this.updateMenuService.updating;
    }

    set newItemComponentToggle(val: boolean) {
        this._componentToggle = val;
        this.newItemComponentToggleChange.emit(this.newItemComponentToggle);
    }

    @Input() menuData: MenuCategory[];
    model: NewMenuItem;
    categories: MenuCategory[];
    hideTableHints = true;
    selectedCategory: MenuCategory;

    constructor(private updateMenuService: UpdateMenuService,
                private menuDataService: MenuDataService,
                private notificationService: NotificationService) {

    }

    ngOnInit() {
        this.model = new NewMenuItem();
        this.model.disableDescription = false;
    }

    toggleTableHints(formInvalid) {
        if (formInvalid) {
            this.hideTableHints = !this.hideTableHints;
            setTimeout(() => {
                this.hideTableHints = true;
            }, 5000);
        }

    }

    formatCategoryId(): void {
        this.model.categoryId = +this.model.categoryId;
        this.selectedCategory = this.menuDataService.getMenuCategoryById(this.model.categoryId);
        console.log(this.selectedCategory);

        if (typeof this.model.position !== 'undefined') {
            this.formatPosition();
        }
    }

    formatPosition(): void {
        let catLength: number;
        if (this.selectedCategory.items === null) {
            catLength = 0;
        } else {
            catLength = this.selectedCategory.items.length + 1;
        }

        this.model.position = this.model.position = Math.round(this.model.position);
        if (this.model.position < 1 ||
            this.model.position > catLength) {
            this.model.position = catLength;
        }
    }

    // todo don't use NewMenuItem, use MenuItem
    saveItem(form): void {
        const newMenuItem = new NewMenuItem();
        newMenuItem.category = form.value.category;
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
                    if (response.success === true && response.data !== null) {
                        this.menuDataService.addMenuItemToCategory(response.data);

                        this.notificationService.addMessage('Added new item to ' + response.data.enTitle);
                        this.newItemComponentToggle = false;
                    } else {
                        this.notificationService.addMessage('Failed to add a new item');
                    }
                } else {
                    this.notificationService.addMessage('Whoops, something went wrong');
                }
                this.updateMenuService.updating = false;

            }, error => this.notificationService.addMessage('Failed to update category position'));
    }
}
