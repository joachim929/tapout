import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs/index';

// Models @todo: Just pass on the info, let the component convert to object
import {MenuCategory} from '../pages/menu/menu-category.model';

@Injectable({
    providedIn: 'root'
})
export class GetInfoService {

    page: string;
    task: string;

    constructor(private httpClient: HttpClient) {
    }

    setPage(page: string) {
        this.page = page;
    }

    setTask(task: string) {
        this.task = task;
    }

    getPageItems(): Observable<any> {
        const getParams = new HttpParams()
            .set('page', this.page)
            .set('task', this.task);

        const httpOptions = {
            headers: new HttpHeaders({'Content-type': 'application/json'}),
            params: getParams
        };
        // @todo: Just pass on the info, let the component convert to object
        return this.httpClient.get<MenuCategory[]>(this.getPageUri() + 'read.php', httpOptions)
            .pipe(
                catchError(this.handleError('get' + this.page + 'data'))
            );
    }

    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            return of(result as T);
        };
    }

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
