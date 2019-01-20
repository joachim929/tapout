import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs';

// Objects
import {MenuCategory} from './menu-category.model';

@Injectable({
    providedIn: 'root'
})
export class UpdateMenuService {
    readonly apiRoot = 'http://localhost:80/Tapout/tapoutAPI/menu/';
    readonly httpPostOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    };
    public _updating: boolean;

    constructor(private httpClient: HttpClient) {
        this._updating = false;
    }

    set updating(toggle: boolean) {
        this._updating = toggle;
    }

    get updating(): boolean {
        return this._updating;
    }

    public updateCategory(category): Observable<any> {
        const body = new HttpParams()
            .set('page', 'Menu')
            .set('task', 'updateCategory')
            .set('module', 'Admin')
            .set('item', JSON.stringify(category));

        this.updating = true;

        return this.httpClient
            .post<MenuCategory>(this.apiRoot + 'update.php', body, this.httpPostOptions);
    }

    // todo Finish setting params
    public createNewCategory(category): Observable<any> {
        const body = new HttpParams()
            .set('page', 'Menu')
            .set('task', '')
            .set('module', 'Admin')
            .set('item', JSON.stringify(category));

        this.updating = true;

        return this.httpClient
            .post<MenuCategory>(this.apiRoot + 'create.php', body, this.httpPostOptions);
    }

    public deleteCategory(id: number): Observable<any> {
        const item = {'id': id, 'type': 'category'};

        const body = new HttpParams()
            .set('page', 'Menu')
            .set('task', 'deleteCategory')
            .set('module', 'Admin')
            .set('item', JSON.stringify(item));

        this.updating = true;

        return this.httpClient.post<boolean>(this.apiRoot + 'delete.php',
            body, this.httpPostOptions);
    }

    public updateCategoryPosition() {
    }
}
