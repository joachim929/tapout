import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {PageItem} from './page-item';

@Injectable({
    providedIn: 'root'
})
export class PageInfoService {
    itemCount: number = null;
    page: string;
    pageItems: PageItem[];
    disableButtons = false;
    readonly httpPostOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    };

    constructor(private httpClient: HttpClient) {
    }

    public setPage(pageRequest) {
        this.page = pageRequest;
    }

    public sortAboutItems(pageItems) {
        let pageIndex = 1;

        for (let i = 0; i < pageItems.length; i++) {
            pageItems[i].pagePosition = pageIndex;
            pageItems[i].toggleEdit = false;
            pageIndex++;
        }
        return pageItems;
    }

    public setItemCount(pageItemLength): void {
        this.itemCount = pageItemLength;
    }

    public getItemCount(): number {
        if (this.itemCount !== null) {
            return this.itemCount;
        }
    }

    public getPageItems(pageName): Observable<PageItem[]> {
        const getParams = new HttpParams()
            .set('page', 'About')
            .set('task', 'edit');

        const httpOptions = {
            headers: new HttpHeaders({'Content-type': 'application/json'}),
            params: getParams
        };

        return this.httpClient.get<PageItem[]>(this.getPageUri(pageName) + 'read.php',
            httpOptions
        )
            .pipe(
                catchError(this.handleError<PageItem[]>('getPageItems'))
            );
    }

    public getPageUri(pageName): string {
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

    public updatePagePosition(pageItem, pageName): Observable<any> {
        const body = new HttpParams()
            .set('pageItems', JSON.stringify(pageItem))
            .set('task', 'pagePosition')
            .set('page', 'About');

        return this.httpClient.post<PageItem[]>(this.getPageUri(pageName) + 'update.php',
            body, this.httpPostOptions
        ).pipe(
            catchError(this.handleError('updatePagePosition'))
        );
    }

    public updatePageItem(pageItem, pageName): Observable<any> {
        const body = new HttpParams()
            .set('pageItem', JSON.stringify(pageItem))
            .set('task', 'updatePageItem')
            .set('page', 'About');

        return this.httpClient.post<PageItem>(this.getPageUri(pageName) + 'update.php',
            body, this.httpPostOptions)
            .pipe(
                catchError(this.handleError('updatePageItem'))
            );
    }

    public newPageItem(pageItem, pageName): Observable<any> {
        const body = new HttpParams()
            .set('pageItem', JSON.stringify(pageItem))
            .set('task', 'createPageItem')
            .set('page', pageName);

        return this.httpClient.post<any>(this.getPageUri(pageName) + 'create.php',
            body, this.httpPostOptions)
            .pipe(
                catchError(this.handleError('createPageItem'))
            );
    }

    public toggleEdit(itemIndex): void {
        this.pageItems[itemIndex].toggleEdit = !this.pageItems[itemIndex].toggleEdit;
    }

    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            return of(result as T);
        };
    }
}
