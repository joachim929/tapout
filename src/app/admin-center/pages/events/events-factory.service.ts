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
        const getParams = new HttpParams()
            .set('page', 'Events')
            .set('task', 'edit')
            .set('module', 'Admin');

        const httpOptions = {
            headers: new HttpHeaders({'Content-type': 'application/json'}),
            params: getParams
        };

        return this.httpClient.get(this.apiRoot + 'read.php', httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
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
