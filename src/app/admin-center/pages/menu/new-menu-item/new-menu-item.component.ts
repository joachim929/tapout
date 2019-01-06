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

    constructor(private getInfoService: GetInfoService,
                private menuInfoService: MenuInfoService) {
        this.model = new NewMenuItem();
        this.model.disableDescription = false;
    }

    ngOnInit() {
        if (typeof this.categories === 'undefined') {
            this.getData();
        }
    }

    public checkPrice(): void {
        if (typeof this.model.price !== 'undefined' &&
            this.model.price.length > 0) {
            this.formatPrice();
        }
    }

    public formatCategoryId(): void {
        this.model.categoryId = +this.model.categoryId;

        if (typeof this.model.pagePosition !== 'undefined') {
            this.formatPosition();
        }
    }

    public formatPosition(): void {
        const catLength = this.menuInfoService.getCategoryLength(this.model.categoryId) + 1;

        this.model.pagePosition = this.model.pagePosition = Math.round(this.model.pagePosition);
        if ( this.model.pagePosition < 1 ||
            this.model.pagePosition > catLength) {
            this.model.pagePosition = catLength;
        } else {
            this.model.pagePosition = null;
        }
    }

    public getData(): void {
        this.getInfoService.getCategories('getCategories', 'Menu')
            .subscribe(response => {
                this.categories = response;
                console.log(this.categories);
            });
    }

    public saveItem(form): void {
        console.log('Save button clicked', form);
        // let check = this.checkValidation();
    }

    private formatPrice(): void {
        this.model.price = this.model.price.replace(/[^0-9,. ]/g, '');
        const tempPrice = this.model.price.split(' ');

        const priceLength = tempPrice.length;

        if (priceLength > 1) {
            this.model.price = '';
            for (let index = 0; index < priceLength; index++) {
                if (tempPrice[index].length === 0) {
                    continue;
                }
                if (index === priceLength - 1) {
                    this.model.price += tempPrice[index] + 'K';
                } else {
                    this.model.price += tempPrice[index] + 'K / ';
                }
            }
        } else {
            this.model.price += 'K';
        }
    }
}
