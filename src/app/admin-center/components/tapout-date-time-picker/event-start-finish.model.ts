import {NgbDate, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

export class EventStartFinish {
    startDate?: NgbDate;
    endDate?: NgbDate;
    startTime?: NgbTimeStruct;
    endTime?: NgbTimeStruct;
    usesStartTime: boolean;
    usesEndTime: boolean;
    usesEndDate: boolean;
}
