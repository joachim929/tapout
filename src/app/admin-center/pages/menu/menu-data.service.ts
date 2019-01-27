import {Injectable} from '@angular/core';

// Objects
import {MenuCategory} from './menu-category.model';

@Injectable({
    providedIn: 'root'
})
export class MenuDataService {
    public _menuData: MenuCategory[];

    constructor() {
    }

    get menuData(): MenuCategory[] {
        return this._menuData;
    }

    set menuData(newMenuData: MenuCategory[]) {
        if (typeof  newMenuData !== 'undefined' && newMenuData !== null) {
            this._menuData = newMenuData;
            this.sortMenu();
        }
    }

    public sortMenu() {
        this._menuData.sort((a, b) => a.position - b.position);
    }

    public getMenuCategory(index: number): MenuCategory {
        return this._menuData[index];
    }

    public setMenuCategory(index: number, newCategory: MenuCategory) {
        if (typeof index !== 'undefined' && typeof newCategory !== 'undefined') {
            this._menuData[index] = newCategory;
            this.sortMenu();
        }
    }

    public incrementCategoryPosition(index: number) {
        this._menuData[index].position++;
    }

    public decrementCategoryPosition(index: number) {
        this._menuData[index].position--;
    }

    public updateCategoryPosition(data: MenuCategory[], index) {
        if (data.length === 2) {
            if (data[0].id === this.menuData[index].id) {
                this.setCategoryPosition(data[0], index);
            } else if (data[1].id === this.menuData[index].id) {
                this.setCategoryPosition(data[1], index);
            }
        }
    }

    private setCategoryPosition(category: MenuCategory, index) {
        this.menuData[index].position = category.position;
        this.menuData[index].editedAt = category.editedAt;
    }


}
