import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {Observable, of, throwError} from 'rxjs';

// Services
import {ExternalLinksService} from '../../../shared/external-links.service';

@Injectable({
    providedIn: 'root'
})
export class EventsFactoryService {
    readonly apiRoot: string;
    readonly httpPostOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    };
    public _updating: boolean;

    constructor(private httpClient: HttpClient,
                private externalLinksService: ExternalLinksService) {
        this._updating = false;
        this.apiRoot = this.externalLinksService.localhost + 'event/';
    }

    set updating(toggle: boolean) {
        this._updating = toggle;
    }

    get updating(): boolean {
        return this._updating;
    }

    getPageItems(): Observable<any> {
        const now = new Date();
        const test = {
            'now': now,
            'test': 'someString'
        };
        const body = new HttpParams()
            .set('newMenuItem', JSON.stringify(test))
            .set('task', 'test')
            .set('page', 'Events')
            .set('module', 'Admin');

        return this.httpClient.post<any>(this.apiRoot + 'create.php',
            body, this.httpPostOptions);
    }
}
