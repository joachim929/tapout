/**
 * Created by J on 12/06/2018.
 */
import {EventContentObject} from './event-content-object';

export const EVENTITEMS: EventContentObject[] = [
    {
        eventCategory: [
            {
                eventID: 1,
                eventTime: new Date('February 4, 2019 06:00'),
                eventDescription: 'Open from 6am to 4pm\n\n' +
                'We will be showing the Super bowl'
            },
            {
                eventID: 2,
                eventTime: new Date('February 5, 2019 00:00'),
                eventDescription: 'February 5, 2019 - Closed for the day'
            },
            {
                eventID: 3,
                eventTime: new Date('February 6, 2019 15:00'),
                eventDescription: 'From the 6th - 10th of February we will be open from 3pm - midnight\n\n' +
                'Our menu for those days will different than the usual menu'
            }
        ],
        eventCategoryID: 100,
        eventCategoryName: 'Tet, Lunar New Year'
    }
];

