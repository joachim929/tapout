import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs';

// Models @todo: Just pass on the info, let the component convert to object
import {MenuCategory} from '../pages/menu/menu-category.model';
import {Category} from '../pages/menu/new-menu-item/new-menu-item.model';

@Injectable({
    providedIn: 'root'
})
export class GetInfoService {

    page: string;
    task: string;

    constructor(private httpClient: HttpClient) {
    }

    public getPageItems(task: string, page: string): Observable<any> {
        this.setTask(task);
        this.setPage(page);

        const getParams = new HttpParams()
            .set('page', this.page)
            .set('task', this.task)
            .set('module', 'Admin');

        const httpOptions = {
            headers: new HttpHeaders({'Content-type': 'application/json'}),
            params: getParams
        };
        // @todo: Just pass on the info, let the component convert to object
        return this.httpClient.get<MenuCategory[]>(this.getPageUri() + 'read.php', httpOptions)
            .pipe(
                catchError(this.handleError('get ' + this.page + ' data'))
            );
    }

    private setPage(page: string) {
        this.page = page;
    }

    private setTask(task: string) {
        this.task = task;
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            return of(result as T);
        };
    }

    // @todo: probably refactor this to another service
    private getPageUri(): string {
        let pageUri = 'http://localhost:80/Tapout/tapoutAPI/';
        if (this.page === 'Events') {
            pageUri += 'event/';
        } else if (this.page === 'Menu') {
            pageUri += 'menu/';
        } else {
            pageUri += 'page/';
        }
        return pageUri;
    }
}
