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
    public editInProgress: boolean;

    private _category: MenuCategory;
    private _item: MenuItem;

    constructor(private updateMenuService: UpdateMenuService,
                private menuDataService: MenuDataService) {
    }

    get selectedItem(): MenuItem {
        if (typeof this._item !== 'undefined') {
            return this._item;
        } else {
            return false;
        }
    }

    set selectedItem(item: MenuItem) {
        this._item = item;
    }

    get selectedCategory(): MenuCategory {
        if (typeof this._category !== 'undefined') {
            return this._category;
        } else {
            return false;
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

    public compareCategoryIds(id: number) {
        let comparison = false;
        if (typeof this.selectedCategory !== 'undefined') {
            comparison = id === this.selectedCategory.id;
        }
        return comparison;
    }

}
