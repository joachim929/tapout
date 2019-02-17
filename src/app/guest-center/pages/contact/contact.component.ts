import {Component, OnInit} from '@angular/core';

// Services
import {ExternalLinksService} from '../../../shared/external-links.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    facebook: string;
    instagram: string;

    normalHours = '11:00-Late';
    specialHours = '15:00-Late';
    endWeek = new Date('February 24 2019');

    get openingHours(): string {
        const now = new Date();
        if (now > this.endWeek) {
            return this.normalHours;
        } else {
            return this.specialHours;
        }
    }

    constructor(private externalLinksService: ExternalLinksService) {
    }

    ngOnInit() {
        this.facebook = this.externalLinksService.facebook;
        this.instagram = this.externalLinksService.instagram;
    }

}
