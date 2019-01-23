import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    showMessage: boolean;
    message = 'IMPORTANT NOTICE! During the Tet holidays our opening hours will change, please click to check opening times!';
    messageDate: Date;

    constructor() {
        this.showMessage = false;
    }

    ngOnInit() {
        this.checkAnnouncement();
    }

    private checkAnnouncement() {
        this.messageDate = new Date('February 6, 2019');
        const today = new Date();
        if (today < this.messageDate &&
            (typeof this.message !== 'undefined' ||
            this.message !== '' ||
            this.message !== null)) {
            this.showMessage = true;
        }
    }
}
