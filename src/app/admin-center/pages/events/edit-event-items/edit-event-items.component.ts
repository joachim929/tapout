import {Component, OnInit} from '@angular/core';

// Objects

// Services
import {TaskRouteService} from '../../../shared/task-route.service';

@Component({
    selector: 'app-edit-event-items',
    templateUrl: './edit-event-items.component.html',
    styleUrls: ['./edit-event-items.component.css']
})
export class EditEventItemsComponent implements OnInit {

    constructor(private taskRouteService: TaskRouteService) {
    }

    ngOnInit() {
    }

}
