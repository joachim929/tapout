/**
 * Created by J on 22/07/2018.
 */
import {WeeklyEventObject} from './event-content-object';

export const EVENTWEEKLYITEMS: WeeklyEventObject[] = [
    {
        eventID: 1,
        eventSubHeading: 'Daily Happy Hour',
        eventTime: new Date('July 23, 2018 18:00'),
        eventDescription: 'Buy one Cocktail, get one free from 4pm-7pm'
    },
    {
        eventID: 2,
        eventSubHeading: 'Burgers and Beers, Mondays',
        eventTime: new Date('July 23, 2018 18:00'),
        eventDescription: 'Buy any Burger and get a free Tiger Beer from 5pm-9pm'
    },
    {
        eventID: 3,
        eventSubHeading: 'Rooster Night, Tuesdays',
        eventTime: new Date('July 24, 2018 22:00'),
        eventDescription: '6x wings any style, 1 medium Rooster bia - 130K ₫\n' +
        '12x wings any style, 1 pint Rooster bia - 210K ₫\n ' +
        '24x wings any style, 4x medium Rooster bia 350K ₫\n' +
        ' Buy 2 get the 3rd FREE on Rooster Bia\'s all night'
    },
    {
        eventID: 4,
        eventSubHeading: 'Why Wine? Wednesdays',
        eventTime: new Date('July 25, 2018 22:00'),
        eventDescription: '50% on all house wines by the glass till 8pm'
    },
    {
        eventID: 5,
        eventSubHeading: 'Tap that Keg Thursdays',
        eventTime: new Date('July 26, 2018 22:00'),
        eventDescription: 'Half a rack of ribs, choice of two sides, and free flow Tiger draft!!!'
    }
];
