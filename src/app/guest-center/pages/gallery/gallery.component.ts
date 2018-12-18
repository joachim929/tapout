import {OnInit, Component} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css'],
    animations: [
        trigger('fadeIn', [
            state('void', style({
                opacity: 0
            })),
            state('loaded', style({
                opacity: 1,
            })),
            transition('void=>*', animate('500ms'))
        ]),
    ]
})
export class GalleryComponent implements OnInit {

    images = [];
    first = [];
    firstLoad = true;
    second = [];
    secondLoad = true;
    third = [];
    thirdLoad = true;
    fourth = [];
    fourthLoad = true;
    imageIndex = 0;

    constructor() {

        this.images = [{'id': 1, 'url': 'putSomeImageUrlHere'}];
    }

    ngOnInit() {
        this.imageLoaded();
    }

    imageLoaded() {
        if (this.imageIndex < this.images.length) {
            this.assignCol(this.imageIndex);
            this.imageIndex++;
        }
        this.firstLoad = false;
        this.secondLoad = false;
        this.thirdLoad = false;
        this.fourthLoad = false;
    }

    assignCol(key) {
        if (key % 4 === 0) {
            this.first.push({
                id: this.images[key].id,
                url: this.images[key].url
            });
        } else if (key % 4 === 1) {
            this.second.push({
                id: this.images[key].id,
                url: this.images[key].url
            });
        } else if (key % 4 === 2) {
            this.third.push({
                id: this.images[key].id,
                url: this.images[key].url
            });
        } else {
            this.fourth.push({
                id: this.images[key].id,
                url: this.images[key].url
            });
        }
    }
}
