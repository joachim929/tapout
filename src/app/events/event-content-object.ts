export class WeeklyEventObject {
    eventID: number;
    eventSubHeading: string;
    eventTime: Date;
    eventDescription: string;
}

export class EventContentObject {
    eventCategory:
        {
            eventID: number;
            eventTime: Date;
            eventDescription: string;
        }[];
    eventCategoryID: number;
    eventCategoryName: string;
}
