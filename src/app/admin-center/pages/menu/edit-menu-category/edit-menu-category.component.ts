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
    public hasChanged: boolean;
    private selectedCategory: MenuCategory;

    constructor(private updateMenuService: UpdateMenuService,
                private menuDataService: MenuDataService) {
    }

    get menuData(): MenuCategory[] {
        return this.menuDataService.menuData;
    }

    get updating(): boolean {
        return this.updateMenuService.updating;
    }

    ngOnInit() {
        this.model = new MenuCategory();
    }

    public lastCategory(index: number): boolean {
        return index === (this.menuData.length - 1);
    }

    public getMenuCategory(index: number): MenuCategory {
        return this.menuDataService.getMenuCategory(index);
    }


    public moveUp(index: number) {
        this.updateMenuService.updating = true;
        this.menuDataService.incrementCategoryPosition(index - 1);
        this.menuDataService.decrementCategoryPosition(index);

        this.updateMenuService
            .updateCategoryPosition(this.getMenuCategory(index - 1), this.getMenuCategory(index))
            .subscribe(response => {
                if (response.success === true) {
                    this.menuDataService.updateCategoryPosition(response.data, index);
                    this.menuDataService.updateCategoryPosition(response.data, index - 1);
                    this.menuDataService.sortMenu();
                } else {
                    console.log('Update position failed');
                    //    todo failed to update? Show error messages?
                }

                this.updateMenuService.updating = false;
            });
    }

    public moveDown(index: number) {
        this.updateMenuService.updating = true;
        this.menuDataService.incrementCategoryPosition(index);
        this.menuDataService.decrementCategoryPosition(index + 1);

        this.updateMenuService.updateCategoryPosition(this.getMenuCategory(index + 1), this.getMenuCategory(index))
            .subscribe(response => {

                if (response.success === true) {
                    this.menuDataService.updateCategoryPosition(response.data, index);
                    this.menuDataService.updateCategoryPosition(response.data, index + 1);
                    this.menuDataService.sortMenu();
                } else {
                    console.log('Update position failed');
                    //    todo failed to update? Show error messages?
                }

                this.updateMenuService.updating = false;
            });
    }

    public deleteCategory(category: MenuCategory) {
        this.model.id = category.id;

        this.updateMenuService.deleteCategory(this.model.id)
            .subscribe(response => {
                if (response === true) {

                    for (let i = 0; i < this.menuData.length; i++) {

                        if (this.menuData[i].id === this.model.id) {
                            this.menuData.splice(i, 1);
                            if (this.menuData.length !== 0) {
                                this.menuDataService.sortMenu();
                            }
                        }
                    }
                    this.model = new MenuCategory;
                }

                this.updateMenuService.updating = false;
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
        this.hasChanged =
            this.selectedCategory.enName !== this.model.enName ||
            this.selectedCategory.vnName !== this.model.vnName ||
            this.selectedCategory.type !== this.model.type;
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
