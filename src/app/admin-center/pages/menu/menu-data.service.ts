import {Injectable} from '@angular/core';

// Objects
import {MenuCategory} from './menu-category.model';
import {MenuItem} from './menu-item.model';

@Injectable({
    providedIn: 'root'
})
export class MenuDataService {
    public _menuData: MenuCategory[];
    public _gotData: boolean;

    constructor() {
        this._gotData = false;
    }

    get gotData(): boolean {
        return this._gotData;
    }

    get menuData(): MenuCategory[] {
        if (typeof this._menuData !== 'undefined') {
            return this._menuData;
        }
    }

    set menuData(newMenuData: MenuCategory[]) {
        if (typeof  newMenuData !== 'undefined' && newMenuData !== null) {
            this._gotData = true;
            this._menuData = newMenuData;
            this.sortMenu();
        }
    }

    sortMenu() {
        this._menuData.sort((a, b) => a.position - b.position);
    }

    sortItems(index: number) {
        this._menuData[index].items.sort((a, b) => a.position - b.position);
    }

    getMenuCategory(index: number): MenuCategory {
        return this._menuData[index];
    }

    getMenuCategoryById(id: number): MenuCategory {
        for (let i = 0; i < this.menuData.length; i++) {
            if (id === this.menuData[i].id) {
                return this.menuData[i];
            }
        }
    }

    setMenuCategory(index: number, newCategory: MenuCategory) {
        if (typeof index !== 'undefined' && typeof newCategory !== 'undefined') {
            this._menuData[index] = newCategory;
            this.sortMenu();
        }
    }

    updateMenuItem(item: MenuItem) {
        let index: number;

        for (let i = 0; i < this.menuData.length; i++) {
            if (item.categoryId !== this.menuData[i].id) {
                continue;
            } else {
                index = i;
            }
            for (let j = 0; j < this.menuData[i].items.length; j++) {
                if (item.itemId === this.menuData[i].items[j].itemId) {
                    this.menuData[i].items[j] = item;
                }
            }
        }

        if (typeof index !== 'undefined' && index !== null) {
            this.sortItems(index);
        }

    }

    addMenuItemToCategory(item: MenuItem) {
        if (typeof item.categoryId !== 'undefined') {
            for (let i = 0; i < this.menuData.length; i++) {
                if (item.categoryId === this.menuData[i].id) {
                    if (this.menuData[i].items === null) {
                        this.menuData[i].items = [item];

                    } else {
                        this.menuData[i].items.push(item);
                        this.sortItems(i);
                    }
                }
            }
        }
    }

    incrementCategoryPosition(index: number) {
        this._menuData[index].position++;
    }

    decrementCategoryPosition(index: number) {
        this._menuData[index].position--;
    }

    updateCategoryPosition(data: MenuCategory[], index) {
        if (data.length === 2) {
            if (data[0].id === this.menuData[index].id) {
                this.setCategoryPosition(data[0], index);
            } else if (data[1].id === this.menuData[index].id) {
                this.setCategoryPosition(data[1], index);
            }
        }
    }

    setCategoryPosition(category: MenuCategory, index) {
        this.menuData[index].position = category.position;
        this.menuData[index].editedAt = category.editedAt;
    }
}
