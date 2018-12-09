import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {PageInfoService} from './page-info.service';
import {PageItem} from './page-item';


@Injectable({
    providedIn: 'root'
})
export class ButtonDeleteService {

    constructor(private httpClient: HttpClient,
                private pageInfoService: PageInfoService) {
    }

    private selectedItem: PageItem;

    // initializeDelete(pageItem, pageName, itemIndex): void {
    //     const deleteCheck = confirm('Click \'OK\' to delete');
    //     if (deleteCheck) {
    //         this.selectedItem = Object.assign({}, pageItem);
    //         this.deleteRequest(pageItem, pageName)
    //             .subscribe(result => {
    //                     if (result === false) {
    //                         alert('Whoops something went wrong');
    //                         this.pageInfoService.pageItems[itemIndex] = this.selectedItem;
    //                     } else {
    //                         this.selectedItem = null;
    //                         pageItem = null;
    //                         this.pageInfoService.pageItems.splice(itemIndex, 1);
    //                         this.pageInfoService.sortAboutItems();
    //                     }
    //                 }
    //             );
    //     }
    // }

    deleteRequest(pageItem, pageName): Observable<any> {
        const body = new HttpParams()
            .set('pageItem', JSON.stringify(pageItem))
            .set('task', 'deleteItem')
            .set('page', 'About');

        const httpPutOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
        };

        return this.httpClient.post<PageItem>(this.pageInfoService.getPageUri(pageName) + 'delete.php',
            body, httpPutOptions
        ).pipe(
            catchError(this.pageInfoService.handleError('deleteRequest'))
        );
    }


}
