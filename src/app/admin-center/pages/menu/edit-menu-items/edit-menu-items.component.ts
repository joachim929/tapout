import {Component, OnInit} from '@angular/core';

// Objects
import {MenuCategory} from '../menu-category.model';
import {MenuItem} from '../menu-item.model';

// Services
import {UpdateMenuService} from '../update-menu.service';
import {MenuDataService} from '../menu-data.service';
import {NotificationService} from '../../../shared/notification.service';

@Component({
    selector: 'app-edit-menu-items',
    templateUrl: './edit-menu-items.component.html',
    styleUrls: ['../menu.component.css']
})
export class EditMenuItemsComponent implements OnInit {
    public model: MenuItem;
    public hasChanged: boolean;
    public editInProgress: boolean;

    private _category: MenuCategory;
    private _item: MenuItem;

    constructor(private updateMenuService: UpdateMenuService,
                private menuDataService: MenuDataService,
                private notificationService: NotificationService) {
    }

    get updating(): boolean {
        return this.updateMenuService.updating;
    }

    get selectedCategory(): MenuCategory {
        if (typeof this._category !== 'undefined') {
            return this._category;
        }
    }

    set selectedCategory(category: MenuCategory) {
        if (typeof this._category === 'undefined') {
            this._category = category;
        } else if (this._category.id === category.id) {
            this._category = new MenuCategory;
        } else {
            this._category = category;
        }
    }

    get menuData(): MenuCategory[] {
        return this.menuDataService.menuData;
    }

    ngOnInit() {
        this.model = new MenuItem();
        this.editInProgress = false;
    }

    initializeDelete(item: MenuItem) {
        console.log('Initializing delete', item);

        this.updateMenuService.deleteItem(item.itemId)
            .subscribe(response => {
                console.log(response);
                if (response === true) {
                    for (let i = 0; i < this.menuData.length; i++) {
                        if (this.menuData[i].id === item.categoryId) {
                            for (let j = 0; j < this.menuData[i].items.length; j++) {
                                if (this.menuData[i].items[j].itemId === item.itemId) {
                                    console.log(this.menuData[i].items[j]);
                                    this.menuData[i].items.splice(j, 1);
                                    if (this.menuData[i].items.length === 0) {
                                        this._category = new MenuCategory;
                                    }
                                }
                            }
                        }
                    }
                } else {
                    this.notificationService.addMessage('Something went wrong deleting the item');
                }
                this.updateMenuService.updating = false;
            });
    }

    initializeSave(index: number) {

        this.updateMenuService.updateItem(this.model)
            .subscribe(response => {
                if (response.success === true && response.data !== null) {
                    if (this._category.items[index].categoryId !== this.model.categoryId) {
                        this.getData(this.model.categoryId);
                    } else {
                        this._category.items[index] = response.data;
                        this.menuDataService.updateMenuItem(this._category.items[index]);
                    }
                } else {
                    this.notificationService.addMessage('Failed to update item');
                }
                this.updateMenuService.updating = false;
                this.cancelEdit(index);
            });
    }

    getData(categoryId: number) {
        this.updateMenuService.getPageItems()
            .subscribe(response => {
                if (response !== null) {
                    this.menuDataService.menuData = response;
                    this.selectedCategory = this.menuDataService.getMenuCategoryById(categoryId);
                } else {
                }
            });
    }

    moveUp(index: number) {
        this.cancelEdit(index);
        const tempCurrent = this._category.items[index];


        const tempPrevious = this._category.items[index - 1];
        tempCurrent.position--;
        tempPrevious.position++;
        if (tempCurrent.position < 1) {
            tempCurrent.position = 1;
        }

        this.moveCall(tempCurrent, tempPrevious);
    }

    moveDown(index: number) {
        this.cancelEdit(index);
        const tempCurrent = this._category.items[index];
        const tempNext = this._category.items[index + 1];
        tempCurrent.position++;
        tempNext.position--;
        if (tempNext.position < 1) {
            tempNext.position = 1;
        }

        this.moveCall(tempCurrent, tempNext);
    }

    checkCategory() {
        const tempCategory = this.getCategoryById(this.model.categoryId);
        if (tempCategory.items === null) {
            this.model.position = 1;
        } else if (this.model.position > tempCategory.items.length + 1) {
            this.model.position = tempCategory.items.length + 1;
        }

        this.formChange();
    }

    toggleCategory(category: MenuCategory) {
        if (typeof this._category !== 'undefined' && typeof this._category.items !== 'undefined') {
            this.selectedCategory.items.forEach((item, index) => {
                this.selectedCategory.items[index].editToggle = false;
            });
        }
        this.selectedCategory = category;
    }

    getCategoryById(id: number): MenuCategory | null {
        let category = null;
        for (let i = 0; i < this.menuData.length; i++) {
            if (id === this.menuData[i].id) {
                category = this.menuData[i];
                break;
            }
        }
        return category;
    }

    formChange() {
        let difference = false;
        if (this.model.categoryId !== this._item.categoryId) {
            difference = true;
        }
        if (this.model.enTitle !== this._item.enTitle) {
            difference = true;
        }
        if (this.model.price !== this._item.price) {
            difference = true;
        }
        if (this.model.vnTitle !== this._item.vnTitle) {
            difference = true;
        }
        if (this.model.disableDescription) {
            if (this._item.enDescription !== null &&
                this._item.vnDescription !== null) {
                difference = true;
            }
        } else {
            if (this.model.enDescription !== this._item.enDescription) {
                difference = true;
            }
            if (this.model.vnDescription !== this._item.vnDescription) {
                difference = true;
            }
        }
        this.hasChanged = difference;
    }

    checkPosition() {
        const tempCategory = this.getCategoryById(this.model.categoryId);
        if (tempCategory !== null) {
            if (tempCategory.items === null) {
                this.model.position = 1;
            } else {
                const itemsLength = tempCategory.items.length + 1;

                if (itemsLength !== null) {
                    this.model.position = this.model.position = Math.round(this.model.position);
                    if (this.model.position < 1 ||
                        this.model.position > itemsLength) {
                        this.model.position = itemsLength;
                    }
                }
            }
        }
        this.formChange();
    }

    /**
     * This function resets parameters to cancel an edit
     */
    cancelEdit(index: number) {
        this.model = new MenuItem;
        console.log(this._category, index);

        if (typeof this._category !== 'undefined') {
            this._category.items[index].editToggle = false;
        }
    }

    initializeEdit(item: MenuItem) {
        for (let i = 0; i < this.selectedCategory.items.length; i++) {
            this._category.items[i].editToggle =
                (item.itemId === this._category.items[i].itemId);
        }

        this.setModelItem(item);
    }

    setModelItem(item: MenuItem) {
        this._item = item;
        this.model = new MenuItem;
        this.model.categoryId = item.categoryId;
        this.model.createdAt = item.createdAt;
        this.model.editedAt = item.editedAt;
        this.model.enDescription = item.enDescription;
        this.model.enId = item.enId;
        this.model.enTitle = item.enTitle;
        this.model.itemId = item.itemId;
        this.model.position = item.position;
        this.model.price = item.price;
        this.model.vnDescription = item.vnDescription;
        this.model.vnId = item.vnId;
        this.model.vnTitle = item.vnTitle;
        this.model.disableDescription =
            ((item.enDescription === null && item.vnDescription === null));
    }

    /**
     * This function checks if it is the last in the array
     */
    lastItem(index: number) {
        return index === (this.selectedCategory.items.length - 1);
    }

    /**
     * This function checks if a given id has the same value of the selected category
     */
    compareCategoryIds(id: number) {
        let comparison = false;
        if (typeof this.selectedCategory !== 'undefined') {
            comparison = id === this.selectedCategory.id;
        }
        return comparison;
    }

    private moveCall(current, other) {
        this.updateMenuService.updateItemPosition(current, other)
            .subscribe(response => {
                if (response.success === true && response.data.length === 2) {
                    if (response.data[0].itemId === current.itemId) {
                        current.editedAt = response.data[0].editedAt;
                        other.editedAt = response.data[1].editedAt;
                    } else {
                        current.editedAt = response.data[1].editedAt;
                        other.editedAt = response.data[0].editedAt;
                    }
                    this.menuDataService.updateMenuItem(current);
                    this.menuDataService.updateMenuItem(other);
                } else {
                    this.notificationService.addMessage('Whoops, something went wrong changing item positions');
                }
                this.updateMenuService.updating = false;
            });
    }
}
