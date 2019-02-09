import {Component, OnInit} from '@angular/core';

// Objects

// Services
import {TaskRouteService} from '../../../shared/task-route.service';

@Component({
    selector: 'app-new-event-category',
    templateUrl: './new-event-category.component.html',
    styleUrls: ['./new-event-category.component.css']
})
export class NewEventCategoryComponent implements OnInit {

    constructor(private taskRouteService: TaskRouteService) {
    }

    ngOnInit() {
    }

}
