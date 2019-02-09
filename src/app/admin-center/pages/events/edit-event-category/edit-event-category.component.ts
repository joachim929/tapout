import {Component, OnInit} from '@angular/core';

// Objects

// Services
import {TaskRouteService} from '../../../shared/task-route.service';

@Component({
    selector: 'app-edit-event-category',
    templateUrl: './edit-event-category.component.html',
    styleUrls: ['./edit-event-category.component.css']
})
export class EditEventCategoryComponent implements OnInit {

    constructor(private taskRouteService: TaskRouteService) {
    }

    ngOnInit() {
    }

}
