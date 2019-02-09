import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class MenuRouteService {
    public _editItemToggle: boolean;
    public _editCategoryToggle: boolean;
    public _newCategoryToggle: boolean;
    public _newItemToggle: boolean;

    constructor(private router: Router) {
        this._editCategoryToggle = false;
        this._editItemToggle = false;
        this._newCategoryToggle = false;
        this._newItemToggle = false;
    }

    get editItemToggle(): boolean {
        return this._editItemToggle;
    }

    set editItemToggle(boolValue: boolean) {
        this._editItemToggle = boolValue;
    }

    get editCategoryToggle(): boolean {
        return this._editCategoryToggle;
    }

    set editCategoryToggle(boolValue: boolean) {
        this._editCategoryToggle = boolValue;
    }

    get newCategoryToggle(): boolean {
        return this._newCategoryToggle;
    }

    set newCategoryToggle(boolValue: boolean) {
        this._newCategoryToggle = boolValue;
    }

    get newItemToggle(): boolean {
        return this._newItemToggle;
    }

    set newItemToggle(boolValue: boolean) {
        this._newItemToggle = boolValue;
    }

    routeToMenu() {
        this.router.navigate(['edit/menu']);
    }

    toggleAllOff() {
        this.editItemToggle = false;
        this.editCategoryToggle = false;
        this.newItemToggle = false;
        this.newCategoryToggle = false;
    }

    toggleNewCategory() {
        if (this.newCategoryToggle === true) {
            this.routeToMenu();
        }
        this.newCategoryToggle = !this.newCategoryToggle;
        if (this.newItemToggle) {
            this.newItemToggle = false;
        }
        if (this.editCategoryToggle) {
            this.editCategoryToggle = false;
        }
        if (this.editItemToggle) {
            this.editItemToggle = false;
        }

    }

    toggleNewItem() {
        if (this.newItemToggle === true) {
            this.routeToMenu();
        }
        this.newItemToggle = !this.newItemToggle;
        if (this.newCategoryToggle) {
            this.newCategoryToggle = false;
        }
        if (this.editCategoryToggle) {
            this.editCategoryToggle = false;
        }
        if (this.editItemToggle) {
            this.editItemToggle = false;
        }
    }

    toggleEditCategory() {
        if (this.editCategoryToggle === true) {
            this.routeToMenu();
        }
        this.editCategoryToggle = !this.editCategoryToggle;
        if (this.newItemToggle) {
            this.newItemToggle = false;
        }
        if (this.newCategoryToggle) {
            this.newCategoryToggle = false;
        }
        if (this.editItemToggle) {
            this.editItemToggle = false;
        }
    }

    toggleEditItem() {
        if (this.editItemToggle === true) {
            this.routeToMenu();
        }
        this.editItemToggle = !this.editItemToggle;
        if (this.newItemToggle) {
            this.newItemToggle = false;
        }
        if (this.newCategoryToggle) {
            this.newCategoryToggle = false;
        }
        if (this.editCategoryToggle) {
            this.editCategoryToggle = false;
        }
    }
}
