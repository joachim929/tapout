import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {Observable, of, throwError} from 'rxjs';

// Objects
import {MenuCategory} from './menu-category.model';
import {MenuItem} from './menu-item.model';

// Services
import {ExternalLinksService} from '../../../shared/external-links.service';


@Injectable({
    providedIn: 'root'
})
export class UpdateMenuService {
    readonly apiRoot: string;
    readonly httpPostOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    };
    public _updating: boolean;

    constructor(private httpClient: HttpClient,
                private externalLinksService: ExternalLinksService) {
        this._updating = false;
        this.apiRoot = this.externalLinksService.localhost + 'menu/';
    }

    set updating(toggle: boolean) {
        this._updating = toggle;
    }

    get updating(): boolean {
        return this._updating;
    }

    getPageItems(): Observable<any> {

        const getParams = new HttpParams()
            .set('page', 'Menu')
            .set('task', 'edit')
            .set('module', 'Admin');

        const httpOptions = {
            headers: new HttpHeaders({'Content-type': 'application/json'}),
            params: getParams
        };

        return this.httpClient.get<MenuCategory[]>(this.apiRoot + 'read.php',
            httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    newCategoryItem(item): Observable<any> {
        const body = new HttpParams()
            .set('newMenuItem', JSON.stringify(item))
            .set('task', 'createMenuItem')
            .set('page', 'Menu')
            .set('module', 'Admin');

        this.updating = true;

        return this.httpClient.post<any>(this.apiRoot + 'create.php',
            body, this.httpPostOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    updateCategory(category): Observable<any> {
        const body = new HttpParams()
            .set('page', 'Menu')
            .set('task', 'updateCategory')
            .set('module', 'Admin')
            .set('item', JSON.stringify(category));

        this.updating = true;

        return this.httpClient.post<MenuCategory>(this.apiRoot + 'update.php',
            body, this.httpPostOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    updateItem(item: MenuItem): Observable<any> {
        const body = new HttpParams()
            .set('page', 'Menu')
            .set('task', 'updateItem')
            .set('module', 'Admin')
            .set('item', JSON.stringify(item));

        this.updating = true;

        return this.httpClient.post<MenuItem>(this.apiRoot + 'update.php',
            body, this.httpPostOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    createNewCategory(category): Observable<any> {
        console.log(category);
        const body = new HttpParams()
            .set('page', 'Menu')
            .set('task', 'createMenuCategory')
            .set('module', 'Admin')
            .set('newMenuCategory', JSON.stringify(category));

        this.updating = true;

        return this.httpClient
            .post<MenuCategory>(this.apiRoot + 'create.php', body, this.httpPostOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    deleteCategory(id: number): Observable<any> {
        const item = {'id': id, 'type': 'category'};

        console.log(item);
        const body = new HttpParams()
            .set('page', 'Menu')
            .set('task', 'deleteCategory')
            .set('module', 'Admin')
            .set('item', JSON.stringify(item));

        this.updating = true;

        return this.httpClient.post<boolean>(this.apiRoot + 'delete.php',
            body, this.httpPostOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    deleteItem(id: number): Observable<any> {
        const item = {'id': id, 'type': 'item'};

        console.log(item);
        const body = new HttpParams()
            .set('page', 'Menu')
            .set('task', 'deleteItem')
            .set('module', 'Admin')
            .set('item', JSON.stringify(item));

        this.updating = true;

        return this.httpClient.post<boolean>(this.apiRoot + 'delete.php', body,
            this.httpPostOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    updateCategoryPosition(previous: MenuCategory, current: MenuCategory): Observable<any> {
        const body = new HttpParams()
            .set('page', 'Menu')
            .set('task', 'updateCategoryPosition')
            .set('module', 'Admin')
            .set('items', JSON.stringify([previous, current]));

        this.updating = true;

        return this.httpClient.post<MenuCategory[]>(this.apiRoot + 'update.php',
            body, this.httpPostOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    updateItemPosition(previous: MenuItem, current: MenuItem): Observable<any> {
        const body = new HttpParams()
            .set('page', 'Menu')
            .set('task', 'updateItemPosition')
            .set('module', 'Admin')
            .set('items', JSON.stringify([previous, current]));

        this.updating = true;

        return this.httpClient.post<any>(this.apiRoot + 'update.php',
            body, this.httpPostOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        this.updating = false;
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something went wrong, try again later'
        );
    }

}
