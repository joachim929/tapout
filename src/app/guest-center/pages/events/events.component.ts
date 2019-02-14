import {Component, OnInit} from '@angular/core';
import {EVENTITEMS} from './event-contents';
import {EVENTWEEKLYITEMS} from './event-weekly-contents';
import {EventContentObject} from './event-content-object';


@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
    eventItems = Array();

    eventItemsPreCheck = EVENTITEMS;

    eventWeeklyItems = EVENTWEEKLYITEMS;

    constructor() {
    }

    ngOnInit() {
        const todaysDate = new Date();

        for (const category of this.eventItemsPreCheck) {

            const tempInnerArray = Array();
            for (const item of category.eventCategory) {
                const itemCheck = item.eventTime;

                const dateYear = todaysDate.getFullYear();
                const dateMonth = todaysDate.getMonth();
                const dateDate = todaysDate.getDate() - 1;
                const checkYear = itemCheck.getFullYear();
                const checkMonth = itemCheck.getMonth();
                const checkDate = itemCheck.getDate();

                // Checks to see if todays date - 1 is before or after event date
                if (checkYear > dateYear) {
                    tempInnerArray.push(item);
                } else if (checkYear === dateYear) {
                    if (checkMonth > dateMonth) {
                        tempInnerArray.push(item);
                    } else if (checkMonth === dateMonth) {
                        if (checkDate > dateDate) {
                            tempInnerArray.push(item);
                        }
                    }
                }

            }

            // Checks to see if eventCategory is empty, if not it pushes it to eventItems
            if (tempInnerArray.length > 0) {
                const test: EventContentObject[] = [
                    {
                        eventCategory: tempInnerArray,
                        eventCategoryID: category.eventCategoryID,
                        eventCategoryName: category.eventCategoryName,
                        isCollapsed: true
                    }
                ];

                this.eventItems.push.apply(this.eventItems, test);
            }
        }
    }
}
