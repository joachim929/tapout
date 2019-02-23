import {Component, OnInit} from '@angular/core';

// Objects
import {EventCategory} from '../event-category.model';
import {EventItem} from '../event-item.model';

// Services
import {EventsFactoryService} from '../events-factory.service';
import {EventsDataService} from '../events-data.service';
import {NotificationService} from '../../../shared/notification.service';
import {EventStartFinish} from "../../../components/tapout-date-time-picker/event-start-finish.model";

@Component({
    selector: 'app-edit-event-items',
    templateUrl: './edit-event-items.component.html',
    styleUrls: ['./edit-event-items.component.css']
})
export class EditEventItemsComponent implements OnInit {
    public model: EventItem;
    // public hasChanged: boolean;
    public hasChanged = true;
    private _category: EventCategory;

    constructor(private eventsFactoryService: EventsFactoryService,
                private eventsDataService: EventsDataService,
                private notificationService: NotificationService) {
    }

    get selectedCategory() {
        if (typeof this._category !== 'undefined') {
            return this._category;
        }
    }

    get categoryIndexById(): number {
        const categoryKey = this.eventsDataService.getCategoryIndexById(this.selectedCategory.id);
        if (categoryKey !== -1) {
            return categoryKey;
        }
    }

    set selectedCategory(category: EventCategory) {
        if (typeof this._category === 'undefined') {
            this._category = category;
        } else if (this._category.id === category.id) {
            this._category = new EventCategory;
        } else {
            this._category = category;
        }
    }

    get eventsData() {
        return this.eventsDataService.eventsData;
    }

    get updating(): boolean {
        return this.eventsFactoryService.updating;
    }

    ngOnInit() {
        this.model = new EventItem();
    }

    formChange() {

    }

    // todo see what this is supposed to do again
    checkCategory() {

    }

    initializeDelete(item: EventItem, index: number) {
        console.log(item);
    }

    initializeEdit(item: EventItem, index: number) {
        this.selectedCategory.items.forEach((value, key) => {
            this.selectedCategory.items[key].editToggle = key === index;
        });

        this.model = new EventItem();
        this.model.manualConstructor(item);

    }

    initializeSave(index: number) {
        this.selectedCategory.items[index] = this.model;
        this.selectedCategory.items[index].editToggle = false;
    }

    dateTimeChange(event: EventStartFinish) {
        this.model.startDate = event.startDate;
        this.model.endDate = event.endDate;
        this.model.startTime = event.startTime;
        this.model.endTime = event.endTime;
        this.model.usesStartTime = event.usesStartTime;
        this.model.usesEndTime = event.usesEndTime;
        this.model.usesEndDate = event.usesEndDate;
        this.model.dateTimeValidate();
    }

    cancelEdit(index: number) {
        this.selectedCategory.items[index].editToggle = false;
        this.model = new EventItem;
    }

    lastItem(index: number) {
        return index === (this.selectedCategory.items.length - 1);
    }

    moveDown(index: number) {
        this.cancelEdit(index);
        const tempCurrent = this.selectedCategory.items[index];
        const tempNext = this.selectedCategory.items[index + 1];
        tempCurrent.position++;
        tempNext.position--;
        if (tempNext.position < 1) {
            tempNext.position = 1;
        }

        this.moveItemPositions(tempCurrent, tempNext);
    }

    moveUp(index: number) {
        this.cancelEdit(index);
        const tempCurrent = this.selectedCategory.items[index];
        const tempPrevious = this.selectedCategory.items[index - 1];
        tempCurrent.position--;
        tempPrevious.position++;
        if (tempCurrent.position < 1) {
            tempCurrent.position = 1;
        }

        this.moveItemPositions(tempCurrent, tempPrevious);
    }

    toggleCategory(category: EventCategory) {
        this.selectedCategory = category;
    }

    /**
     * This function checks if a given id has the same value of the selected category
     */
    activeCategory(id: number): boolean {
        let comparison = false;
        if (typeof this.selectedCategory !== 'undefined') {
            comparison = id === this.selectedCategory.id;
        }
        return comparison;
    }

    private moveItemPositions(current: EventItem, other: EventItem) {
        this.eventsFactoryService.updateItemPositions(current, other)
            .subscribe(response => {

                if (this.checkResponse(response) && response.success === true && response.data.length === 2) {
                    if (response.data[0].itemId === current.itemId) {
                        current.editedAt = response.data[0].editedAt;
                        other.editedAt = response.data[1].editedAt;
                    } else {
                        current.editedAt = response.data[1].editedAt;
                        other.editedAt = response.data[0].editedAt;
                    }
                    this.eventsDataService.eventsData[this.categoryIndexById].updateMenuItem(current);
                    this.eventsDataService.eventsData[this.categoryIndexById].updateMenuItem(other);
                } else {
                    this.notificationService.addMessage('Whoops, something went wrong changing item positions');
                }

                this.eventsFactoryService.updating = false;
            }, error => {
                this.eventsFactoryService.updating = false;
                this.notificationService.addMessage('Failed to update category position');
            });
    }

    private checkResponse(response: any): boolean {
        return typeof response !== 'undefined' && response !== null &&
            typeof response.success !== 'undefined' && response.success !== null &&
            typeof response.data !== 'undefined' && response.data !== null;
    }
}
