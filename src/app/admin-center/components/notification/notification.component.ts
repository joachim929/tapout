import {Component, OnInit} from '@angular/core';

// Objects
import {Message} from '../../shared/model/message.model';

// Services
import {NotificationService} from '../../shared/notification.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

    constructor(private notificationService: NotificationService) {
    }

    ngOnInit() {
    }

    get messages(): Message[] {
        if (typeof this.notificationService.messages !== 'undefined') {
            return this.notificationService.messages;
        }
    }

    toggleMessage(index: number) {
        this.notificationService.toggleMessage(index);
    }

}
