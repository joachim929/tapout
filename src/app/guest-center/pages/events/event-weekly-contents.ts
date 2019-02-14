/**
 * Created by J on 22/07/2018.
 */
import {WeeklyEventObject} from './event-content-object';

export const EVENTWEEKLYITEMS: WeeklyEventObject[] = [
    {
        eventID: 8,
        eventSubHeading: 'Happy Hour',
        eventTime: new Date('October 28, 2018 18:00'),
        eventDescription: 'Monday - Friday: 50% off all CRAFT BEERS and COCKTAILS 5pm-6pm',
        isCollapsed: true
    },
    {
        eventID: 1,
        eventSubHeading: 'Lunch Special!',
        eventTime: new Date('October 29, 2018 18:00'),
        eventDescription: '12 Noon - 2PM\n' +
        'Choose one Main, one Side & one Drink: 160K₫\n\n' +
        'Main:\nBLT Slab - Tap Out Burger - Saigon\'s Veggie Burger - Chophouse Salad - Arugula Salad\n\n' +
        'Side:\nGrilled Corn - Vietnamese Coleslaw - Garlic rice - Sweet Potato Fries - ' +
        'Dalat Potato Salad - Crispy Potatoes - Grilled Okra\n\n' +
        'Drink:\nBlack Coffee - Juices - Soft Drinks',
        isCollapsed: true
    },
    {
        eventID: 2,
        eventSubHeading: 'Mondays',
        eventTime: new Date('October 30, 2018 18:00'),
        eventDescription: 'Mate meet Monday! 2 for 1 on BBQ Platters',
        isCollapsed: true
    },
    {
        eventID: 3,
        eventSubHeading: 'Wednesdays',
        eventTime: new Date('October 31, 2018 16:00'),
        eventDescription: 'Full Rack of Ribs with 2 Sides - 300K₫',
        isCollapsed: true
    },
    {
        eventID: 4,
        eventSubHeading: 'Thursdays',
        eventTime: new Date('November 1, 2018 16:00'),
        eventDescription: 'Half price Cocktails until 8PM',
        isCollapsed: true
    },
    {
        eventID: 5,
        eventSubHeading: 'Fridays',
        eventTime: new Date('November 2, 2018 22:00'),
        eventDescription: 'Happy Hour from 5-8PM\n' +
        '2 for 1 on all Bar Snacks 5-7PM',
        isCollapsed: true
    },
    // {
    //     eventID: 6,
    //     eventSubHeading: 'Saturday - Oyster Night',
    //     eventTime: new Date('November 3, 2018 22:00'),
    //     eventDescription: 'Every Saturday we have a special for all those Oyster lovers out there, ' +
    //     'whether it is fresh oysters, grilled with cheese oysters, or our very own special smoked oysters',
    //     isCollapsed: true
    // },
    // {
    //     eventID: 7,
    //     eventSubHeading: 'Sunday - Crafty Sundays',
    //     eventTime: new Date('November 4, 2018 15:00'),
    //     eventDescription: 'Buy 2 get the 3rd free on all craft beers from 3pm-7pm\n' +
    //     'Buy half a rack of ribs, and get a free Te Te Craft beer with it',
    //     isCollapsed: true
    // }
];
