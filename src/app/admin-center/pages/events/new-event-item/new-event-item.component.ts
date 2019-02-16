import {Component, OnInit} from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';

// Objects
import {EventItem} from '../event-item.model';
import {EventCategory} from '../event-category.model';

// Services
import {TaskRouteService} from '../../../shared/task-route.service';
import {EventsDataService} from '../events-data.service';
import {EventsFactoryService} from '../events-factory.service';

@Component({
    selector: 'app-new-event-item',
    templateUrl: './new-event-item.component.html',
    styleUrls: ['./new-event-item.component.css']
})
export class NewEventItemComponent implements OnInit {
    hoveredDate: NgbDate;
    monthsDisplayed: number;
    fromDate: NgbDate;
    toDate: NgbDate;
    startTime: {hour: number, minute: number};
    endTime: {hour: number, minute: number};
    startMeridian = true;
    endMeridian = true;

    public model: EventItem;
    public categories: EventCategory[];
    public tableHints: boolean;
    public selectedCategory: EventCategory;
    public _initialPositionPlaceholder = 'Enter the category placement...';
    public _positionPlaceholder = 'Select a category first';

    constructor(private taskRouteService: TaskRouteService,
                private eventsDataService: EventsDataService,
                private eventsFactoryService: EventsFactoryService,
                private ngbCalendar: NgbCalendar) {
        this.monthsDisplayed = 1;
        // this.fromDate = ngbCalendar.getToday();
    }

    get positionPlaceholder(): string {
        if (this.model.categoryId === null) {
            return this._positionPlaceholder;
        } else {
            return this._initialPositionPlaceholder;
        }
    }

    get eventsData() {
        return this.eventsDataService.eventsData;
    }

    get updating() {
        return this.eventsFactoryService.updating;
    }

    ngOnInit() {
        this.model = new EventItem();
        this.tableHints = false;
    }

    goBack() {
        this.taskRouteService.routeToMenu();
    }

    toggleHints(form) {
        console.log(form);
    }

    saveItem() {
        console.log('saving');
    }

    toggleEndDate() {
        if (this.model.usesEndDate === false) {
            this.toDate = null;
            this.monthsDisplayed = 1;
        } else {
            this.monthsDisplayed = 2;
        }
    }

    onDateSelection(date: NgbDate) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        } else if (this.model.usesEndDate && this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        } else {
            this.toDate = null;
            this.fromDate = date;
        }
    }

    isHovered(date: NgbDate) {
        return this.model.usesEndDate && this.fromDate && !this.toDate && this.hoveredDate &&
            date.after(this.fromDate) && date.before(this.hoveredDate);
    }

    isInside(date: NgbDate) {
        return this.model.usesEndDate && date.after(this.fromDate) && date.before(this.toDate);
    }

    isRange(date: NgbDate) {
        return date.equals(this.fromDate) ||
            date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    }
}
