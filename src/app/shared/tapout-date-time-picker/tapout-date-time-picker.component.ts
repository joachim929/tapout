import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbCalendar, NgbDate, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tapout-date-time-picker',
    templateUrl: './tapout-date-time-picker.component.html',
    styleUrls: ['./tapout-date-time-picker.component.css']
})
export class TapoutDateTimePickerComponent implements OnInit {
    @Input() startDate: NgbDate;
    @Output() startDateEmitter = new EventEmitter<NgbDate>();

    hoveredDate: NgbDate;
    monthsDisplayed = 2;
    endDate: NgbDate;
    startTime: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
    endTime: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
    usesStartTime: boolean;
    usesEndDate: boolean;
    usesEndTime: boolean;

    constructor(private ngbCalendar: NgbCalendar) {
        this.startDate = ngbCalendar.getToday();
    }

    ngOnInit() {
    }

    // Date picker and Time picker stuff
    toggleEndDate() {
        if (this.usesEndDate === false) {
            this.endDate = null;
        } else {
            this.endDate = this.ngbCalendar.getNext(this.startDate, 'd', 6);
        }
    }

    onDateSelection(date: NgbDate) {
        if (!this.startDate && !this.endDate) {
            this.startDate = date;
            this.startDateEmitter.emit(this.startDate);
        } else if (this.usesEndDate && this.startDate && !this.endDate && date.after(this.startDate)) {
            this.endDate = date;
        } else {
            this.endDate = null;
            this.startDate = date;
            this.startDateEmitter.emit(this.startDate);
        }
    }

    isHovered(date: NgbDate) {
        return this.usesEndDate && this.startDate && !this.endDate && this.hoveredDate &&
            date.after(this.startDate) && date.before(this.hoveredDate);
    }

    isInside(date: NgbDate) {
        return this.usesEndDate && date.after(this.startDate) && date.before(this.endDate);
    }

    isRange(date: NgbDate) {
        return date.equals(this.startDate) ||
            date.equals(this.endDate) || this.isInside(date) || this.isHovered(date);
    }

}
