import {Injectable} from '@angular/core';

// Objects
import {EventCategory} from './event-category.model';

@Injectable({
    providedIn: 'root'
})
export class EventsDataService {
    private _gotData: boolean;
    private _eventsData: EventCategory[];

    constructor() {
        this._gotData = false;
    }

    get gotData(): boolean {
        return this._gotData;
    }

    set gotData(value: boolean) {
        this._gotData = value;
    }

    get eventsData(): EventCategory[] {
        if (typeof this._eventsData !== 'undefined') {
            return this._eventsData;
        }
    }

    set eventsData(data: EventCategory[]) {
        if (typeof data !== 'undefined' && data !== null) {
            console.log(data);
            this._gotData = true;
            this._eventsData = data;
        }
    }

    getCategoryIndexById(id: number): number {
        let requiredKey = -1;

        this.eventsData.forEach((category, key) => {
            if (category.id === id) {
                requiredKey = key;
            }
        });

        return requiredKey;
    }
}
