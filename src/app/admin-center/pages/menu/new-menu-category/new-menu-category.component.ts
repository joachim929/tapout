import {Component, Input, OnInit} from '@angular/core';

// Objects
import {MenuCategory} from '../menu-category.model';

// Services
import {UpdateMenuService} from '../update-menu.service';

@Component({
    selector: 'app-new-menu-category',
    templateUrl: './new-menu-category.component.html',
    styleUrls: ['../menu.component.css']
})
export class NewMenuCategoryComponent implements OnInit {
    @Input() menuData: MenuCategory[];
    public model: MenuCategory;
    // public showInfo: boolean;

    // private highestPagePosition: number;


    constructor(private updateMenuService: UpdateMenuService) {
        // this.highestPagePosition = 0;
        // this.model = new MenuCategory();
    }

    // get highestPosition(): number {
    //     return this.highestPagePosition + 1;
    // }

    ngOnInit() {
        // this.showInfo = false;
        // this.setHighestPagePosition();
    }

    // public formatPagePosition() {
    //     this.setHighestPagePosition();
    //     this.model.position = Math.round(this.model.position);
    //     if (this.model.position > this.highestPosition) {
    //         this.model.position = this.highestPosition;
    //     } else if (this.model.position < 1) {
    //         this.model.position = 1;
    //     }
    // }
    //
    // public toggleShowInfo(): void {
    //     if (typeof this.menuData !== 'undefined') {
    //         if (this.highestPagePosition === 0) {
    //             this.setHighestPagePosition();
    //         }
    //     }
    //     this.showInfo = true;
    //     setTimeout(() => {
    //         this.showInfo = false;
    //     }, 5000);
    // }
    //
    // public initializeNewCategory(categoryForm): void {
    //     if (categoryForm.valid) {
    //         this.updateMenuService.createNewCategory(this.model)
    //             .subscribe(response => {
    //                 this.updateMenuService.updating = false;
    //             //    todo do something with the response
    //             });
    //     }
    // }
    //
    // private setHighestPagePosition() {
    //     if (typeof this.menuData !== 'undefined') {
    //         for (const category of this.menuData) {
    //             if (category.position > this.highestPagePosition) {
    //                 this.highestPagePosition = category.position;
    //             }
    //         }
    //     }
    // }


}
