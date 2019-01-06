import {Injectable} from '@angular/core';

// Objects
import {MenuCategory} from './menu-category.model';

@Injectable({
    providedIn: 'root'
})
export class MenuInfoService {
    menuData: MenuCategory[];

    constructor() {
    }

    public setMenuData(data: MenuCategory[]) {
        this.menuData = data;
        console.log(this.menuData);
    }

    public getCategoryLength(catId: number): number {
        let catLength: number;
        for (const cat of this.menuData) {
            if (cat.id === catId) {
                catLength = cat.items.length;
            }
        }

        return catLength;
    }
}
