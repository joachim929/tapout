import {Component, OnInit} from '@angular/core';

// Objects

// Services
import {TaskRouteService} from '../../../shared/task-route.service';

@Component({
    selector: 'app-new-event-item',
    templateUrl: './new-event-item.component.html',
    styleUrls: ['./new-event-item.component.css']
})
export class NewEventItemComponent implements OnInit {

    constructor(private taskRouteService: TaskRouteService) {
    }

    ngOnInit() {
    }

}
