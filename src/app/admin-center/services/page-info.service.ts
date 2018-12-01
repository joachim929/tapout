import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {PageItem} from './page-item';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  page: string;
  pageItems: PageItem[];

  API_URL = 'http://localhost:80/Tapout/tapoutAPI';

  constructor(private httpClient: HttpClient) {
  }

  getPageItems(pageName): Observable<PageItem[]> {
    const getParams = new HttpParams()
        .set('page', 'About')
        .set('task', 'edit');

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' }),
      params: getParams
    };

    return this.httpClient.get<PageItem[]>(this.getPageUri(pageName) + '/read.php',
        httpOptions
    )
        .pipe(
        catchError(this.handleError<PageItem[]>('getPageItems'))
    );
  }

  updatePagePosition(pageItem, pageName): Observable<any> {
    const body = new HttpParams()
        .set('pageItems', JSON.stringify(pageItem))
        .set('task', 'pagePosition')
        .set('page', 'About');

    const httpPutOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})
    };

    return this.httpClient.post<PageItem[]>(this.getPageUri(pageName) + 'update.php',
        body, httpPutOptions
    ).pipe(
        catchError(this.handleError('updatePagePosition'))
    );
  }

  private getPageUri(pageName) {
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

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
