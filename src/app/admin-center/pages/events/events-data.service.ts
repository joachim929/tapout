import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EventsDataService {
    public _gotData: boolean;
    public _eventsData: object;

    constructor() {
        this._gotData = false;
    }

    get gotData(): boolean {
        return this._gotData;
    }

    set gotData(value: boolean) {
        this._gotData = value;
    }

    get eventsData(): object {
        if (typeof this._eventsData !== 'undefined') {
            return this._eventsData;
        }
    }

    set eventsData(data) {
        if (typeof data !== 'undefined' && data !== null) {
            this._gotData = true;
            this._eventsData = data;
        }
    }
}
