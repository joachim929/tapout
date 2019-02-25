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

    constructor(private externalLinksService: ExternalLinksService) {
    }

    ngOnInit() {
        this.facebook = this.externalLinksService.facebook;
        this.instagram = this.externalLinksService.instagram;
    }

}
