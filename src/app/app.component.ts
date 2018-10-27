import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Tap Out Vietnam';

    imgSrc;

    isIn = false;   // store state

    toggleState() { // click handler
        const bool = this.isIn;
        this.isIn = bool === false;
    }

    collapseMenu() {
        this.isIn = false;
    }

    constructor() {
    }

    ngOnInit() {
        this.imgSrc = '/assets/nav-bar-logo-scaled.png';
    }
}
