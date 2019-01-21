import {Component, Input, OnInit} from '@angular/core';

// Objects
import {NewMenuItem, Category} from './new-menu-item.model';
import {MenuCategory} from '../menu-category.model';

// Services
import {MenuInfoService} from '../menu-info.service';

@Component({
    selector: 'app-new-menu-item',
    templateUrl: './new-menu-item.component.html',
    styleUrls: ['./new-menu-item.component.css']
})
export class NewMenuItemComponent implements OnInit {
    @Input() menuData: MenuCategory[];
    model: NewMenuItem;
    categories: MenuCategory[];
    hideTableHints = true;

    constructor(private menuInfoService: MenuInfoService) {
        this.model = new NewMenuItem();
        this.model.disableDescription = false;
    }

    // @todo: On create new item, show error messages if there are any.
    ngOnInit() {
    }

    public toggleTableHints(formInvalid) {
        if (formInvalid) {
            this.hideTableHints = !this.hideTableHints;
            setTimeout(() => {
                this.hideTableHints = true;
            }, 5000);
        }

    }

    public formatCategoryId(): void {
        this.model.categoryId = +this.model.categoryId;

        if (typeof this.model.position !== 'undefined') {
            this.formatPosition();
        }
    }

    public formatPosition(): void {
        const catLength = this.menuInfoService.getCategoryLength(this.model.categoryId) + 1;

        this.model.position = this.model.position = Math.round(this.model.position);
        if (this.model.position < 1 ||
            this.model.position > catLength) {
            this.model.position = catLength;
        }
    }


    public saveItem(form): void {
        console.log(form);
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

        this.menuInfoService.newCategoryItem(newMenuItem, 'Menu')
            .subscribe(response => {
                console.log(response);
            });
    }
}
