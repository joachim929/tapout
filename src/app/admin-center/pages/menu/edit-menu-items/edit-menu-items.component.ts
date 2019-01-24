import {Component, OnInit} from '@angular/core';

// Objects
import {MenuCategory} from '../menu-category.model';
import {MenuItem} from '../menu-item.model';

// Services
import {UpdateMenuService} from '../update-menu.service';
import {MenuDataService} from '../menu-data.service';

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
                private menuDataService: MenuDataService) {
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
        console.log(this._category);
    }

    get menuData(): MenuCategory[] {
        return this.menuDataService.menuData;
    }

    ngOnInit() {
        this.model = new MenuItem();
        this.editInProgress = false;
    }

    initializeDelete() {
        console.log('Implement initialize delete button');
    }

    // todo implement this
    moveUp(index: number) {
        this.cancelEdit(index);
        const tempCurrent = this._category.items[index];
        const tempPrevious = this._category.items[index - 1];
        tempCurrent.position--;
        tempPrevious.position++;

        // on success implement this
        this._category.items[index] = tempPrevious;
        this._category.items[index - 1] = tempCurrent;
    }

    // todo implement this
    moveDown(index: number) {
        this.cancelEdit(index);
        const tempCurrent = this._category.items[index];
        const tempNext = this._category.items[index + 1];
        tempCurrent.position++;
        tempNext.position--;

        // on success implement this
        this._category.items[index] = tempNext;
        this._category.items[index + 1] = tempCurrent;
    }

    checkCategory() {
        const tempCategory = this.getCategoryById(this.model.categoryId);

        if (this.model.position > tempCategory.items.length + 1) {
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
        if (this.model.position !== this._item.position) {
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
            const itemsLength = tempCategory.items.length + 1;

            if (itemsLength !== null) {
                this.model.position = this.model.position = Math.round(this.model.position);
                if (this.model.position < 1 ||
                    this.model.position > itemsLength) {
                    this.model.position = itemsLength;
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
        this._category.items[index].editToggle = false;
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

}
