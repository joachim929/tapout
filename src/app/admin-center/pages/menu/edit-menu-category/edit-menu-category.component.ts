import {Component, OnInit} from '@angular/core';

// Objects
import {MenuCategory} from '../menu-category.model';

// Services
import {UpdateMenuService} from '../update-menu.service';
import {MenuDataService} from '../menu-data.service';

@Component({
    selector: 'app-edit-menu-category',
    templateUrl: './edit-menu-category.component.html',
    styleUrls: ['../menu.component.css']
})
export class EditMenuCategoryComponent implements OnInit {
    public model: MenuCategory;
    public editInProgress: boolean;
    public hasChanged: boolean;
    private selectedCategory: MenuCategory;

    constructor(private updateMenuService: UpdateMenuService,
                private menuDataService: MenuDataService) {
    }

    get menuData(): MenuCategory[] {
        return this.menuDataService.menuData;
    }

    ngOnInit() {
        this.model = new MenuCategory();
        this.editInProgress = false;
    }

    public lastCategory(index: number): boolean {
        return index === (this.menuData.length - 1);
    }

    public getMenuCategory(index: number): MenuCategory {
        return this.menuDataService.getMenuCategory(index);
    }


    public moveUp(index: number) {
        this.menuDataService.incrementCategoryPosition(index - 1);
        this.menuDataService.decrementCategoryPosition(index);

        this.updateMenuService
            .updateCategoryPosition(this.getMenuCategory(index - 1), this.getMenuCategory(index))
            .subscribe(response => {
                this.updateMenuService.updating = false;

                if (response.success === true) {
                    this.menuDataService.decrementCategoryPosition(index - 1);
                    this.menuDataService.incrementCategoryPosition(index);
                    this.menuDataService.sortMenu();
                } else {
                    console.log('Update position failed');
                    //    todo failed to update? Show error messages?
                }
            });
    }

    public moveDown(index: number) {
        const tempNext = this.getMenuCategory(index + 1);
        console.log(tempNext);
        const tempCurrent = this.getMenuCategory(index);
        console.log(tempCurrent);

        tempNext.position--;
        tempCurrent.position++;

        this.updateMenuService.updateCategoryPosition(tempNext, tempCurrent)
            .subscribe(response => {
                this.updateMenuService.updating = false;

                if (response.success === true) {
                    this.menuData[index + 1] = tempNext;
                    this.menuData[index] = tempCurrent;
                } else {
                    console.log('Update position failed');
                    //    todo failed to update? Show error messages?
                }
            });
    }

    public deleteCategory(category: MenuCategory) {
        this.model.id = category.id;

        this.updateMenuService.deleteCategory(this.model.id)
            .subscribe(response => {
                this.updateMenuService.updating = false;
                if (response.errors === null && response.warnings === null) {
                    // todo delete the category from the menuData array
                    for (let i = 0; i < this.menuData.length; i++) {
                        if (this.menuData[i].id === this.model.id) {
                            delete this.menuData[i];
                        }
                    }
                    this.model = new MenuCategory;
                }
            });
    }

    public initializeUpdate() {
        for (let i = 0; i < this.menuData.length; i++) {
            if (this.model.id === this.menuData[i].id) {
                this.updateCategory(i);
                break;
            } else {
                console.log('Couldn\'t find object in menuData array');
            }
        }
    }

    private updateCategory(index: number) {
        this.menuData[index].enName = this.model.enName;
        this.menuData[index].vnName = this.model.vnName;
        this.menuData[index].type = this.model.type;

        this.updateMenuService.updateCategory(this.menuData[index])
            .subscribe(response => {
                this.updateMenuService.updating = false;
                this.menuData[index] = response;
            });
    }

    public formChange() {
        if (this.selectedCategory.enName !== this.model.enName ||
            this.selectedCategory.vnName !== this.model.vnName ||
            this.selectedCategory.type !== this.model.type) {
            this.hasChanged = true;
        } else {
            this.hasChanged = false;
        }
    }

    private formatEditToggle() {
        console.log(this.menuData);
        for (let i = 0; i < this.menuData.length; i++) {
            this.menuData[i].editToggle = false;
        }
    }

    public initializeEdit(category: MenuCategory) {
        this.checkOtherEdits(category.id);

        this.selectedCategory = category;
        this.model = new MenuCategory();
        this.model.id = category.id;
        this.model.position = category.position;
        this.model.enName = category.enName;
        this.model.vnName = category.vnName;
        this.model.type = category.type;
    }

    public cancelEdit() {
        this.model = new MenuCategory();
        this.selectedCategory = new MenuCategory();
        this.hasChanged = false;
    }

    private checkOtherEdits(categoryId: number) {
        for (let i = 0; i < this.menuData.length; i++) {
            if (this.menuData[i].id === categoryId) {
                continue;
            }
            if (this.menuData[i].editToggle === true) {
                this.menuData[i].editToggle = false;
            }
        }
    }

}
