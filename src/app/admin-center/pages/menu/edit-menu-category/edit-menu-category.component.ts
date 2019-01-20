import {Component, Input, OnInit} from '@angular/core';

// Objects
import {MenuCategory} from '../menu-category.model';

// Services
import {UpdateMenuService} from '../update-menu.service';

@Component({
    selector: 'app-edit-menu-category',
    templateUrl: './edit-menu-category.component.html',
    styleUrls: ['../menu.component.css']
})
export class EditMenuCategoryComponent implements OnInit {
    @Input() menuData: MenuCategory[];
    public model: MenuCategory;
    public editInProgress: boolean;
    public hasChanged: boolean;
    private selectedCategory: MenuCategory;

    constructor(private updateMenuService: UpdateMenuService) {
    }

    ngOnInit() {
        console.log(this.menuData);
        this.editInProgress = false;
        this.formatEditToggle();
    }

    public moveUp() {

    }

    public moveDown() {

    }

    public deleteCategory() {
        this.updateMenuService.deleteCategory(this.model.id)
            .subscribe( response => {
                this.updateMenuService.updating = false;
                if (response === true) {
                // todo delete the category from the menuData array
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
