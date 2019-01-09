import {Component, OnInit} from '@angular/core';

// Objects
import {NewMenuItem, Category} from './new-menu-item.model';

// Services
import {GetInfoService} from '../../../shared/get-info.service';
import {MenuInfoService} from '../menu-info.service';

@Component({
    selector: 'app-new-menu-item',
    templateUrl: './new-menu-item.component.html',
    styleUrls: ['./new-menu-item.component.css']
})
export class NewMenuItemComponent implements OnInit {
    model: NewMenuItem;
    categories: Array<Category>;
    hideTableHints = true;

    constructor(private getInfoService: GetInfoService,
                private menuInfoService: MenuInfoService) {
        this.model = new NewMenuItem();
        this.model.disableDescription = false;
    }

    // @todo: On create new item, show error messages if there are any.
    ngOnInit() {
        if (typeof this.categories === 'undefined') {
            this.getData();
        }
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

        if (typeof this.model.categoryPosition !== 'undefined') {
            this.formatPosition();
        }
    }

    public formatPosition(): void {
        const catLength = this.menuInfoService.getCategoryLength(this.model.categoryId) + 1;

        this.model.categoryPosition = this.model.categoryPosition = Math.round(this.model.categoryPosition);
        if (this.model.categoryPosition < 1 ||
            this.model.categoryPosition > catLength) {
            this.model.categoryPosition = catLength;
        }
    }

    // @todo: This call is kinda redundant as we got all the data already, just need to wait for it before we can access it
    // @todo -      solve with a emitter?
    public getData(): void {
        this.getInfoService.getCategories('getCategories', 'Menu')
            .subscribe(response => {
                this.categories = response;
                console.log(this.categories);
            });
    }

    public saveItem(form): void {
        console.log(form);
        const newMenuItem = new NewMenuItem();
        newMenuItem.category = form.value.category;
        newMenuItem.caption = this.model.caption;
        newMenuItem.enTitle = this.model.enTitle;
        newMenuItem.categoryPosition = this.model.categoryPosition;
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
