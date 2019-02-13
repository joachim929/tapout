import {Component, OnInit} from '@angular/core';

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
    public model: EventItem;
    public categories: EventCategory[];
    public tableHints: boolean;
    public selectedCategory: EventCategory;

    constructor(private taskRouteService: TaskRouteService,
                private eventsDataService: EventsDataService,
                private eventsFactoryService: EventsFactoryService) {
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

    toggleHints(formInvalid: boolean) {

    }

    saveItem() {

    }

}
