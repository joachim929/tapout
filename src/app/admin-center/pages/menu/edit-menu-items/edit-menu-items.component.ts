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

    public moveUp(form) {
        console.log(form.form);
    }

    public moveDown(form) {
        console.log(form.form);
    }

    public cancelEdit(index: number) {
        this.model = new MenuItem;
        this._category.items[index].editToggle = false;
    }

    public initializeEdit(item: MenuItem) {
        for (let i = 0; i < this.selectedCategory.items.length; i++) {
            this._category.items[i].editToggle =
                (item.itemId === this._category.items[i].itemId);
        }
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
            ((typeof item.enDescription === 'undefined' && typeof item.vnDescription === 'undefined'));
    }

    public lastItem(index: number) {
        return index === (this.selectedCategory.items.length - 1);
    }

    public compareCategoryIds(id: number) {
        let comparison = false;
        if (typeof this.selectedCategory !== 'undefined') {
            comparison = id === this.selectedCategory.id;
        }
        return comparison;
    }

}
