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

    get eventsData(): object {
        if (typeof this._eventsData !== 'undefined') {
            return this._eventsData;
        }
    }

    // todo unfinished
    set eventsData(something) {
        this._eventsData = something;
    }
}
