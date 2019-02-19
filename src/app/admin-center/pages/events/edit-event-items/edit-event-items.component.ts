import {Component, OnInit} from '@angular/core';

// Objects
import {EventCategory} from '../event-category.model';
import {EventItem} from '../event-item.model';

// Services
import {TaskRouteService} from '../../../shared/task-route.service';
import {EventsFactoryService} from '../events-factory.service';
import {EventsDataService} from '../events-data.service';

@Component({
    selector: 'app-edit-event-items',
    templateUrl: './edit-event-items.component.html',
    styleUrls: ['./edit-event-items.component.css']
})
export class EditEventItemsComponent implements OnInit {
    public model;
    public hasChanged: boolean;

    private _category: EventCategory;
    private _item: EventItem;

    constructor(private taskRouteService: TaskRouteService,
                private eventsFactoryService: EventsFactoryService,
                private eventsDataService: EventsDataService) {
    }

    get selectedCategory() {
        if (typeof this._category !== 'undefined') {
            return this._category;
        }
    }

    set selectedCategory(category) {
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

        const test = new Date();
        console.log(test);
    }

    initializeDelete(item: EventItem) {

    }

    initializeSave(index: number) {

    }

    cancelEdit(index: number) {

    }

    lastItem(index: number) {

    }

    moveDown(index: number) {

    }

    moveUp(index: number) {

    }

    toggleCategory(category: EventCategory) {
        this.selectedCategory = category;
        this._item = this.selectedCategory.items[0];
        // console.log(this._item._createdAt.toString());
        console.log(this._item._createdAt.toLocaleDateString());
        console.log(this._item._createdAt.toDateString());
        console.log(this._item._createdAt.toUTCString());

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

}
