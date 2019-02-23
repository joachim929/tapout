import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';

import {EventStartFinish} from './event-start-finish.model';
import {EventItem} from '../../pages/events/event-item.model';

@Component({
    selector: 'app-tapout-date-time-picker',
    templateUrl: './tapout-date-time-picker.component.html',
    styleUrls: ['./tapout-date-time-picker.component.css']
})
export class TapoutDateTimePickerComponent implements OnInit {
    @Input() item: EventItem;
    @Output() dateTimeEmitter = new EventEmitter<EventStartFinish>();

    model: EventStartFinish;
    hoveredDate: NgbDate;
    monthsDisplayed = 2;

    constructor(private ngbCalendar: NgbCalendar) {
        this.model = new EventStartFinish;
        // this.model.startDate = this.ngbCalendar.getToday();
        // this.model.endDate = this.ngbCalendar.getNext(this.model.startDate, 'd', 6);
        // this.model.startTime = {hour: 0, minute: 0, second: 0};
        // this.model.endTime = {hour: 0, minute: 0, second: 0};
    }

    ngOnInit() {
        this.getEventItemDate();
    }

    getEventItemDate() {
        this.model.startDate = this.item.startDate;
        this.model.endDate = this.item.endDate;
        this.model.startTime = this.item.startTime;
        this.model.endTime = this.item.endTime;
        this.model.usesStartTime = this.item.usesStartTime;
        this.model.usesEndTime = this.item.usesEndTime;
        this.model.usesEndDate = this.item.usesEndDate;
    }

    startFinishChange() {
        console.log(this.model);
        this.dateTimeEmitter.emit(this.model);
    }

    // Date picker and Time picker stuff
    toggleEndDate() {
        if (this.model.usesEndDate === false) {
            this.model.endDate = null;
        } else {
            this.model.endDate = this.ngbCalendar.getNext(this.model.startDate, 'd', 6);
        }

        this.dateTimeEmitter.emit(this.model);
    }

    onDateSelection(date: NgbDate) {
        if (!this.model.startDate && !this.model.endDate) {
            this.model.startDate = date;
        } else if (this.model.usesEndDate && this.model.startDate && !this.model.endDate && date.after(this.model.startDate)) {
            this.model.endDate = date;
        } else {
            this.model.endDate = null;
            this.model.startDate = date;
        }

        this.dateTimeEmitter.emit(this.model);
    }

    isHovered(date: NgbDate) {
        return this.model.usesEndDate && this.model.startDate && !this.model.endDate && this.hoveredDate &&
            date.after(this.model.startDate) && date.before(this.hoveredDate);
    }

    isInside(date: NgbDate) {
        return this.model.usesEndDate && date.after(this.model.startDate) && date.before(this.model.endDate);
    }

    isRange(date: NgbDate) {
        return date.equals(this.model.startDate) ||
            date.equals(this.model.endDate) || this.isInside(date) || this.isHovered(date);
    }

}
