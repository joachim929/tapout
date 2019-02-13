import {Component, OnInit} from '@angular/core';

// Services
import {EventsDataService} from './events-data.service';
import {EventsFactoryService} from './events-factory.service';
import {TaskRouteService} from '../../shared/task-route.service';
import {NotificationService} from '../../shared/notification.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

    constructor(private eventsDataService: EventsDataService,
                private eventsFactoryService: EventsFactoryService,
                private notificationService: NotificationService,
                private taskRouteService: TaskRouteService) {

        this.taskRouteService.toggleAllOff();
    }

    get gotData(): boolean {
        return this.eventsDataService.gotData;
    }

    set gotData(value: boolean) {
        this.eventsDataService.gotData = value;
    }

    get editItemToggle(): boolean {
        return this.taskRouteService.editItemToggle;
    }

    set editItemToggle(boolValue: boolean) {
        this.taskRouteService.editItemToggle = boolValue;
    }

    get editCategoryToggle(): boolean {
        return this.taskRouteService.editCategoryToggle;
    }

    set editCategoryToggle(boolValue: boolean) {
        this.taskRouteService.editCategoryToggle = boolValue;
    }

    get newCategoryToggle(): boolean {
        return this.taskRouteService.newCategoryToggle;
    }

    set newCategoryToggle(boolValue: boolean) {
        this.taskRouteService.newCategoryToggle = boolValue;
    }

    get newItemToggle(): boolean {
        return this.taskRouteService.newItemToggle;
    }

    set newItemToggle(boolValue: boolean) {
        this.taskRouteService.newItemToggle = boolValue;
    }

    get updating(): boolean {
        return this.eventsFactoryService.updating;
    }

    get checkDisabled(): boolean {
        return !this.gotData || this.updating;
    }

    ngOnInit() {
        this.getData();
        this.taskRouteService.baseNav = 'admin/events';
    }

    getData() {
        this.eventsFactoryService.getPageItems()
            .subscribe(response => {
                this.eventsFactoryService.updating = false;
                if (response.success === true && response.data !== null) {
                    this.gotData = true;
                    this.eventsDataService.eventsData = response.data;
                } else {
                    this.gotData = false;
                }
            }, error => {
                this.notificationService.addMessage(error);
            });
    }

    toggleNewItem() {
        if (this.updating === true) {
            return false;
        }
        this.taskRouteService.toggleNewItem();
    }

    toggleNewCategory() {
        this.taskRouteService.toggleNewCategory();
    }

    toggleEditItem() {
        this.taskRouteService.toggleEditItem();
    }

    toggleEditCategory() {
        this.taskRouteService.toggleEditCategory();
    }

}
