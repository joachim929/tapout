import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbCalendar, NgbDate, NgbTimeStruct, NgbTimeAdapter} from '@ng-bootstrap/ng-bootstrap';

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

    startDate: NgbDate;
    endDate: NgbDate;
    startTime: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
    endTime: NgbTimeStruct = {hour: 0, minute: 0, second: 0};

    model: EventStartFinish;
    hoveredDate: NgbDate;
    monthsDisplayed = 2;

    constructor(private ngbCalendar: NgbCalendar) {
        this.startDate = this.ngbCalendar.getToday();
    }

    ngOnInit() {
        this.model = new EventStartFinish;
        this.startDate = this.item.startDate;
        this.endDate = this.item.endDate;
        this.startTime = this.item.startTime;
        this.endTime = this.item.endTime;
        this.model.usesStartTime = this.item.usesStartTime;
        this.model.usesEndTime = this.item.usesEndTime;
        this.model.usesEndDate = this.item.usesEndDate;
    }

    dateTimeChange() {
        this.formatTime();
        this.dateTimeEmitter.emit(this.model);
    }

    formatTime() {
        if (this.model.usesStartTime === true) {
            this.model.startTime = this.toModel(this.startTime);
        } else {
            this.model.startTime = null;
        }
        if (this.model.usesEndTime === true) {
            this.model.endTime = this.toModel(this.endTime);
        } else {
            this.model.endTime = null;
        }
    }

    // Date picker and Time picker stuff
    toggleEndDate() {
        if (this.model.usesEndDate === false) {
            this.endDate = null;
        } else {
            this.endDate = this.ngbCalendar.getNext(this.startDate, 'd', 6);
        }

        this.dateTimeEmitter.emit(this.model);
    }

    onDateSelection(date: NgbDate) {
        if (!this.startDate && !this.endDate) {
            this.startDate = date;
            this.model.startDate = this.startDate.year + '-' + this.startDate.month + '-' + this.startDate.day;
        } else if (this.model.usesEndDate && this.startDate && !this.endDate && date.after(this.startDate)) {
            this.endDate = date;
            this.model.endDate = this.endDate.year + '-' + this.endDate.month + '-' + this.endDate.day;
        } else {
            this.endDate = null;
            this.startDate = date;
            this.model.startDate = this.startDate.year + '-' + this.startDate.month + '-' + this.startDate.day;
        }
        this.dateTimeEmitter.emit(this.model);
    }

    isHovered(date: NgbDate) {
        return this.model.usesEndDate && this.startDate && !this.endDate && this.hoveredDate &&
            date.after(this.startDate) && date.before(this.hoveredDate);
    }

    isInside(date: NgbDate) {
        return this.model.usesEndDate && date.after(this.startDate) && date.before(this.endDate);
    }

    isRange(date: NgbDate) {
        return date.equals(this.startDate) ||
            date.equals(this.endDate) || this.isInside(date) || this.isHovered(date);
    }

    private toStruct(time: string): NgbTimeStruct {
        if (!time) {
            return null;
        } else {
            const timeSplit = time.split('-');
            return {year: parseInt(timeSplit[0], 10), month: parseInt(timeSplit[1], 10), day: parseInt(timeSplit[2], 10)};
        }
    }

    private toModel(time: NgbTimeStruct): string {
        if (!time) {
            return null;
        }
        return `${this.pad(time.hour)}:${this.pad(time.minute)}`;
    }

    private pad(i: number): string {
        return i < 10 ? `0${i}` : `${i}`;
    }
}
