import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

// Objects
import {MenuCategory} from './menu-category.model';

@Injectable({
    providedIn: 'root'
})
export class MenuInfoService {
    menuData: MenuCategory[];
    readonly httpPostOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    };

    constructor(private httpClient: HttpClient) {
    }

    public setMenuData(data: MenuCategory[]) {
        this.menuData = data;
    }

    public getCategoryLength(catId: number): number {
        let catLength: number;
        for (const cat of this.menuData) {
            if (cat.id === catId) {
                catLength = cat.items.length;
            }
        }

        return catLength;
    }

    // @todo: Merge into a single service
    public newCategoryItem(item, pageName: string): Observable<any> {
        const body = new HttpParams()
            .set('newMenuItem', JSON.stringify(item))
            .set('task', 'createMenuItem')
            .set('page', pageName);

        return this.httpClient.post<any>(this.getPageUri(pageName) + 'create.php',
            body, this.httpPostOptions)
            .pipe(
                catchError(this.handleError('createMenuItem'))
            );
    }

    // @todo: Merge into a single service
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            return of(result as T);
        };
    }

    // @todo: Merge into a single service
    private getPageUri(pageName): string {
        let pageUri = 'http://localhost:80/Tapout/tapoutAPI/';
        if (pageName === 'Events') {
            pageUri += 'event/';
        } else if (pageName === 'Menu') {
            pageUri += 'menu/';
        } else {
            pageUri += 'page/';
        }
        return pageUri;
    }
}
