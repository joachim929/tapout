import {Component, OnInit} from '@angular/core';

// Objects
import {MenuCategory} from '../menu-category.model';

// Services
import {UpdateMenuService} from '../update-menu.service';
import {MenuDataService} from '../menu-data.service';
import {NotificationService} from '../../../shared/notification.service';

@Component({
    selector: 'app-edit-menu-category',
    templateUrl: './edit-menu-category.component.html',
    styleUrls: ['../menu.component.css']
})
export class EditMenuCategoryComponent implements OnInit {
    public model: MenuCategory;
    public hasChanged: boolean;
    private selectedCategory: MenuCategory;

    constructor(private updateMenuService: UpdateMenuService,
                private menuDataService: MenuDataService,
                private notificationService: NotificationService) {
    }

    get menuData(): MenuCategory[] {
        return this.menuDataService.menuData;
    }

    get updating(): boolean {
        return this.updateMenuService.updating;
    }

    ngOnInit() {
        this.model = new MenuCategory();
    }

    lastCategory(index: number): boolean {
        return index === (this.menuData.length - 1);
    }

    getMenuCategory(index: number): MenuCategory {
        return this.menuDataService.getMenuCategory(index);
    }

    // todo combine move up and move down functionality as it just repeats
    moveUp(index: number) {
        this.updateMenuService.updating = true;
        this.menuDataService.incrementCategoryPosition(index - 1);
        this.menuDataService.decrementCategoryPosition(index);

        this.updateMenuService
            .updateCategoryPosition(this.getMenuCategory(index - 1), this.getMenuCategory(index))
            .subscribe(response => {
                if (response.success === true) {
                    this.menuDataService.updateCategoryPosition(response.data, index);
                    this.menuDataService.updateCategoryPosition(response.data, index - 1);
                    this.menuDataService.sortMenu();
                } else {
                    this.notificationService.addMessage('Supposedly failed to update the page position, try refresh the page');
                }

                this.updateMenuService.updating = false;

            }, error => this.notificationService.addMessage('Failed to update category position'));
    }

    // todo combine move up and move down functionality as it just repeats
    moveDown(index: number) {
        this.updateMenuService.updating = true;
        this.menuDataService.incrementCategoryPosition(index);
        this.menuDataService.decrementCategoryPosition(index + 1);

        this.updateMenuService.updateCategoryPosition(this.getMenuCategory(index + 1), this.getMenuCategory(index))
            .subscribe(response => {

                if (response.success === true) {
                    this.menuDataService.updateCategoryPosition(response.data, index);
                    this.menuDataService.updateCategoryPosition(response.data, index + 1);
                    this.menuDataService.sortMenu();
                } else {
                    this.notificationService.addMessage('Supposedly failed to update the page position, try refresh the page');
                }

                this.updateMenuService.updating = false;

            }, error => this.notificationService.addMessage('Failed to update category position'));
    }

    deleteCategory(category: MenuCategory) {
        this.model.id = category.id;

        this.updateMenuService.deleteCategory(this.model.id)
            .subscribe(response => {
                if (response === true) {
                    for (let i = 0; i < this.menuData.length; i++) {

                        if (this.menuData[i].id === this.model.id) {
                            this.menuData.splice(i, 1);
                            if (this.menuData.length !== 0) {
                                this.menuDataService.sortMenu();
                            }
                        }
                    }
                    this.model = new MenuCategory;
                } else {
                    this.notificationService.addMessage('Something went wrong deleting a category');
                }

                this.updateMenuService.updating = false;

            }, error => this.notificationService.addMessage('Something went wrong deleting a category'));
    }

    initializeUpdate() {
        for (let i = 0; i < this.menuData.length; i++) {
            if (this.model.id === this.menuData[i].id) {
                this.updateCategory(i);
                break;
            } else {
                this.notificationService.addMessage('Something went wrong, try refresh the page');
            }
        }
    }

    formChange() {
        this.hasChanged =
            this.selectedCategory.enName !== this.model.enName ||
            this.selectedCategory.vnName !== this.model.vnName ||
            this.selectedCategory.type !== this.model.type;
    }

    initializeEdit(category: MenuCategory) {
        this.checkOtherEdits(category.id);

        this.selectedCategory = category;
        this.model = new MenuCategory();
        this.model.id = category.id;
        this.model.position = category.position;
        this.model.enName = category.enName;
        this.model.vnName = category.vnName;
        this.model.type = category.type;
    }

    cancelEdit() {
        this.model = new MenuCategory();
        this.selectedCategory = new MenuCategory();
        this.hasChanged = false;
    }

    private updateCategory(index: number) {
        this.menuData[index].enName = this.model.enName;
        this.menuData[index].vnName = this.model.vnName;
        this.menuData[index].type = this.model.type;

        this.updateMenuService.updateCategory(this.menuData[index])
            .subscribe(response => {
                if (response.success === true &&
                    response.data !== null &&
                    response.data.length === 1) {
                    this.menuData[index].editedAt = response.data[0].editedAt;
                } else {
                    this.notificationService.addMessage('Something went wrong updating the category');
                }
                this.cancelEdit();
                this.menuData[index].editToggle = false;
                this.updateMenuService.updating = false;

            }, error => this.notificationService.addMessage('Something went wrong updating the category'));
    }

    private checkOtherEdits(categoryId: number) {
        for (let i = 0; i < this.menuData.length; i++) {
            if (this.menuData[i].id === categoryId) {
                continue;
            }
            if (this.menuData[i].editToggle === true) {
                this.menuData[i].editToggle = false;
            }
        }
    }

}
