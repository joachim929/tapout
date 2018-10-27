/**
 * Created by J on 12/06/2018.
 */
import {EventContentObject} from './event-content-object';

export const EVENTITEMS: EventContentObject[] = [
    {
        eventCategory: [
            {
                eventID: 1,
                eventTime: new Date('August 27, 2019 16:00'),
                eventDescription: 'Wolves vs Man City - 6:30pm kick off'
            },
            {
                eventID: 2,
                eventTime: new Date('August 26, 2019 16:00'),
                eventDescription: 'Kick off whenever'
            },
            {
                eventID: 3,
                eventTime: new Date('August 25, 2019 16:00'),
                eventDescription: 'Shouldn\'t see this'
            }
        ],
        eventCategoryID: 100,
        eventCategoryName: 'Football'
    }
    ,
    {
        eventCategory: [
            {
                eventID: 4,
                eventTime: new Date('November 25, 2018 18:30'),
                eventDescription: 'TESTMan City - 6:30pm kick off'
            },
            {
                eventID: 5,
                eventTime: new Date('December 2, 2018 18:30'),
                eventDescription: 'Kick NEVER EVER'
            },
            {
                eventID: 6,
                eventTime: new Date('August 2, 2019 18:30'),
                eventDescription: 'Shouldn\'t see this'
            }
        ],
        eventCategoryID: 99,
        eventCategoryName: 'Rugby'
    }
];

