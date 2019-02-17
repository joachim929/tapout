import {Component, OnInit} from '@angular/core';
import {
    NgbDateStruct,
    NgbCalendar,
    NgbDate,
    NgbTimeStruct,
    NgbDateParserFormatter,
    NgbDatepickerI18n,
    NgbTimeAdapter
} from '@ng-bootstrap/ng-bootstrap';

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

    public model: EventItem;
    public categories: EventCategory[];
    public tableHints: boolean;
    public selectedCategory: EventCategory;
    public _initialPositionPlaceholder = 'Select category position...';
    public _positionPlaceholder = 'Select a category first...';

    constructor(private taskRouteService: TaskRouteService,
                private eventsDataService: EventsDataService,
                private eventsFactoryService: EventsFactoryService,
                private ngbCalendar: NgbCalendar,
                private ngbDateParserFormatter: NgbDateParserFormatter) {
        this.monthsDisplayed = 1;
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
        this.model.startDate = this.ngbCalendar.getToday();
        this.tableHints = false;
    }

    categoryChange() {
        for (let i = 0; i < this.eventsData.length; i++) {
            if (this.model.categoryId === this.eventsData[i].id) {

                this.selectedCategory = new EventCategory();
                this.selectedCategory.setFromExisting(this.eventsData[i]);

                this.model.categoryType = this.selectedCategory.type;
                if (this.model.position !== null) {
                    this.formatPosition();
                }
            }
        }
    }

    formatPosition() {
        if (this.selectedCategory.items !== null) {

            const itemsLength = this.selectedCategory.itemsLength;

            if (this.model.position > itemsLength) {
                this.model.position = itemsLength + 1;
            }
        } else {
            this.model.position = 1;
        }
    }

    goBack() {
        this.taskRouteService.routeToMenu();
    }

    toggleHints(form) {
        console.log(this.ngbDateParserFormatter.format(this.model.startDate), this.ngbDateParserFormatter.format(this.model.endDate));
    }

    saveItem() {
        console.log('saving');
    }

    // Date picker and Time picker stuff
    toggleEndDate() {
        if (this.model.usesEndDate === false) {
            this.model.endDate = null;
            this.monthsDisplayed = 1;
        } else {
            this.model.endDate = this.ngbCalendar.getNext(this.model.startDate, 'd', 6);
            this.monthsDisplayed = 2;
        }
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
