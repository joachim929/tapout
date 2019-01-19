import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Tap Out Vietnam';

    constructor(private router: Router,
                private titleService: Title) {
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                (<any>window).gtag('config', 'UA-132815920-1', {
                    'page_title': this.titleService.getTitle(),
                    'page_path': event.urlAfterRedirects
                });
            }
        });
    }

}
