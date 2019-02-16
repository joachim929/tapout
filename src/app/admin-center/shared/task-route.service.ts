import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class TaskRouteService {
    public _editItemToggle: boolean;
    public _editCategoryToggle: boolean;
    public _newCategoryToggle: boolean;
    public _newItemToggle: boolean;
    public _baseNav: string;

    constructor(private router: Router) {
        this._editCategoryToggle = false;
        this._editItemToggle = false;
        this._newCategoryToggle = false;
        this._newItemToggle = false;
    }

    get baseNav(): string {
        return this._baseNav;
    }

    goBack(): void {
    }

    set baseNav(location: string) {
        this._baseNav = location;
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
        this.toggleAllOff();
        this.router.navigate([this.baseNav]);
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
        } else {
            this.toggleAllOff();
            this.newCategoryToggle = true;
        }
    }

    toggleNewItem() {
        if (this.newItemToggle === true) {
            this.routeToMenu();
        } else {
            this.toggleAllOff();
            this.newItemToggle = true;
        }
    }

    toggleEditCategory() {
        if (this.editCategoryToggle === true) {
            this.routeToMenu();
        } else {
            this.toggleAllOff();
            this.editCategoryToggle = true;
        }
    }

    toggleEditItem() {
        if (this.editItemToggle === true) {
            this.routeToMenu();
        } else {
            this.toggleAllOff();
            this.editItemToggle = true;
        }
    }
}
