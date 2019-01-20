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
    readonly apiRoot = 'http://localhost:80/Tapout/tapoutAPI/menu/update.php';
    readonly httpPostOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    };

    constructor(private httpClient: HttpClient) {
    }

    public updateCategory(category): Observable<any> {
        const body = new HttpParams()
            .set('page', 'Menu')
            .set('task', 'updateCategory')
            .set('module', 'Admin')
            .set('item', JSON.stringify(category));

        return this.httpClient.post<MenuCategory>(this.apiRoot, body, this.httpPostOptions);
    }
}
