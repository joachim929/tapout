import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {PageItem} from './page-item';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  itemCount: number = null;
  page: string;
  pageItems: PageItem[];
  disableButtons = false;
  selectedPageItem: PageItem;

  constructor(
      private httpClient: HttpClient
  ) { }

  private sortAboutItems() {
    let pageIndex = 1;

    for (let i = 0; i < this.pageItems.length; i++) {
      this.pageItems[i].pagePosition = pageIndex;
      this.pageItems[i].toggleEdit = false;
      pageIndex++;
    }
  }

  getPageContent(page): void {
    this.getPageItems(page)
        .subscribe(pageItems => {
          this.pageItems = pageItems;
          this.itemCount = this.pageItems.length;
          this.sortAboutItems();
          console.log(this.pageItems);
        });
  }

  private getPageItems(pageName): Observable<PageItem[]> {
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

  getPageUri(pageName) {
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

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  updatePagePosition(pageItem, pageName): Observable<any> {
    const body = new HttpParams()
        .set('pageItems', JSON.stringify(pageItem))
        .set('task', 'pagePosition')
        .set('page', 'About');

    const httpPutOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    };

    return this.httpClient.post<PageItem[]>(this.getPageUri(pageName) + 'update.php',
        body, httpPutOptions
    ).pipe(
        catchError(this.handleError('updatePagePosition'))
    );
  }

  // @todo: Move to buttonSaveService
  validationCheckHeading(heading) {
    return heading.length < 4 || heading.length > 254;
  }

  // @todo: Move to buttonSaveService
  validationCheckContent(content) {
    return content.length === 0;
  }

  // @todo: Move to buttonSaveService
  toggleEdit(itemIndex) {
    this.pageItems[itemIndex].toggleEdit = !this.pageItems[itemIndex].toggleEdit;
  }

  // @todo: Move to buttonEditService
  initializeEdit(item, itemIndex) {
    this.selectedPageItem = Object.assign({}, item);
    this.pageItems[itemIndex].toggleEdit = !this.pageItems[itemIndex].toggleEdit;
  }

  // @todo: Move to buttonEditService
  cancelEdit(itemIndex) {
    this.pageItems[itemIndex].toggleEdit = !this.pageItems[itemIndex].toggleEdit;
    this.pageItems[itemIndex] = this.selectedPageItem;
  }

  // @todo: Move to buttonSaveService
  saveChangesToPageItem(item, itemIndex) {
    if (this.checkAllFields(item)) {
      this.toggleEdit(itemIndex);
      return alert('Saved successfully');
    } else {
      return alert('Can\'t save right now, make sure all the input boxes are filled in correctly');
    }
  }

  // @todo: Move to buttonSaveService
  private checkAllFields(item) {
    return !this.validationCheckContent(item.enContent)
        && !this.validationCheckContent(item.vnContent)
        && !this.validationCheckHeading(item.enHeading)
        && !this.validationCheckHeading(item.vnHeading);
  }
}
