import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


    imgSrc;

    isIn = false;   // store state

    constructor(private titleService: Title) {
    }

    ngOnInit() {
        this.imgSrc = '/assets/nav-bar-logo-scaled.png';
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle('Tap Out Vietnam - ' + newTitle);
    }

    toggleState() { // click handler
        const bool = this.isIn;
        this.isIn = bool === false;
    }

    collapseMenu() {
        this.isIn = false;
    }

}
