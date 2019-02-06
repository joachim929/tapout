import {OnInit, Component} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

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
            transition('void=>*', animate('1000ms'))
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
        // This is a back up for when you need to update the website again
        this.images = [
            {'id': 25, 'url': '/assets/photos/540/DSC07514.jpg'},
            {'id': 62, 'url': '/assets/photos/540/IMG_0243.jpg'},
            {'id': 1, 'url': '/assets/photos/540/ACP-1.jpg'},
            {'id': 84, 'url': '/assets/photos/540/IMG_0282.jpg'},
            {'id': 36, 'url': '/assets/photos/540/DSC07649-2.jpg'},
            {'id': 24, 'url': '/assets/photos/540/DSC07506.jpg'},
            {'id': 58, 'url': '/assets/photos/540/DSC08000.jpg'},
            {'id': 79, 'url': '/assets/photos/540/IMG_0277.jpg'},
            {'id': 5, 'url': '/assets/photos/540/ACP-5.jpg'},
            {'id': 11, 'url': '/assets/photos/540/DSC07398.jpg'},
            {'id': 28, 'url': '/assets/photos/540/DSC07595.jpg'},
            {'id': 44, 'url': '/assets/photos/540/DSC07685-2.jpg'},
            {'id': 27, 'url': '/assets/photos/540/DSC07571.jpg'},
            {'id': 14, 'url': '/assets/photos/540/DSC07422.jpg'},
            {'id': 63, 'url': '/assets/photos/540/IMG_0246.jpg'},
            {'id': 38, 'url': '/assets/photos/540/DSC07657.jpg'},
            {'id': 50, 'url': '/assets/photos/540/DSC07842.jpg'},
            {'id': 66, 'url': '/assets/photos/540/IMG_0257.jpg'},
            {'id': 82, 'url': '/assets/photos/540/IMG_0280.jpg'},
            {'id': 64, 'url': '/assets/photos/540/IMG_0250.jpg'},
            {'id': 20, 'url': '/assets/photos/540/DSC07479.jpg'},
            {'id': 60, 'url': '/assets/photos/540/DSC08011.jpg'},
            {'id': 74, 'url': '/assets/photos/540/IMG_0272.jpg'},
            {'id': 17, 'url': '/assets/photos/540/DSC07453.jpg'},
            {'id': 33, 'url': '/assets/photos/540/DSC07634.jpg'},
            {'id': 15, 'url': '/assets/photos/540/DSC07429.jpg'},
            {'id': 94, 'url': '/assets/photos/540/IMG_0490.jpg'},
            {'id': 45, 'url': '/assets/photos/540/DSC07687-2.jpg'},
            {'id': 88, 'url': '/assets/photos/540/IMG_0433.jpg'},
            {'id': 73, 'url': '/assets/photos/540/IMG_0267.jpg'},
            {'id': 48, 'url': '/assets/photos/540/DSC07821.jpg'},
            {'id': 71, 'url': '/assets/photos/540/IMG_0263.jpg'},
            {'id': 95, 'url': '/assets/photos/540/IMG_0491.jpg'},
            {'id': 43, 'url': '/assets/photos/540/DSC07684-2.jpg'},
            {'id': 92, 'url': '/assets/photos/540/IMG_0437.jpg'},
            {'id': 8, 'url': '/assets/photos/540/ACP-8.jpg'},
            {'id': 52, 'url': '/assets/photos/540/DSC07867.jpg'},
            {'id': 49, 'url': '/assets/photos/540/DSC07834.jpg'},
            {'id': 47, 'url': '/assets/photos/540/DSC07720-2.jpg'},
            {'id': 76, 'url': '/assets/photos/540/IMG_0274.jpg'},
            {'id': 21, 'url': '/assets/photos/540/DSC07483.jpg'},
            {'id': 75, 'url': '/assets/photos/540/IMG_0273.jpg'},
            {'id': 42, 'url': '/assets/photos/540/DSC07680-2.jpg'},
            {'id': 89, 'url': '/assets/photos/540/IMG_0434.jpg'},
            {'id': 93, 'url': '/assets/photos/540/IMG_0489.jpg'},
            {'id': 39, 'url': '/assets/photos/540/DSC07659-2.jpg'},
            {'id': 96, 'url': '/assets/photos/540/IMG_0492.jpg'},
            {'id': 22, 'url': '/assets/photos/540/DSC07487.jpg'},
            {'id': 23, 'url': '/assets/photos/540/DSC07494.jpg'},
            {'id': 51, 'url': '/assets/photos/540/DSC07856.jpg'},
            {'id': 41, 'url': '/assets/photos/540/DSC07673-2.jpg'},
            {'id': 46, 'url': '/assets/photos/540/DSC07692.jpg'},
            {'id': 31, 'url': '/assets/photos/540/DSC07623.jpg'},
            {'id': 97, 'url': '/assets/photos/540/IMG_0493.jpg'},
            {'id': 80, 'url': '/assets/photos/540/IMG_0278.jpg'},
            {'id': 59, 'url': '/assets/photos/540/DSC08004.jpg'},
            {'id': 57, 'url': '/assets/photos/540/DSC07998.jpg'},
            {'id': 2, 'url': '/assets/photos/540/ACP-2.jpg'},
            {'id': 67, 'url': '/assets/photos/540/IMG_0258.jpg'},
            {'id': 16, 'url': '/assets/photos/540/DSC07452.jpg'},
            {'id': 86, 'url': '/assets/photos/540/IMG_0285.jpg'},
            {'id': 12, 'url': '/assets/photos/540/DSC07415.jpg'},
            {'id': 98, 'url': '/assets/photos/540/IMG_0494.jpg'},
            {'id': 13, 'url': '/assets/photos/540/DSC07419.jpg'},
            {'id': 70, 'url': '/assets/photos/540/IMG_0261.jpg'},
            {'id': 19, 'url': '/assets/photos/540/DSC07466.jpg'},
            {'id': 10, 'url': '/assets/photos/540/ACP-10.jpg'},
            {'id': 91, 'url': '/assets/photos/540/IMG_0436.jpg'},
            {'id': 30, 'url': '/assets/photos/540/DSC07600.jpg'},
            {'id': 53, 'url': '/assets/photos/540/DSC07880.jpg'},
            {'id': 32, 'url': '/assets/photos/540/DSC07628.jpg'},
            {'id': 85, 'url': '/assets/photos/540/IMG_0284.jpg'},
            {'id': 3, 'url': '/assets/photos/540/ACP-3.jpg'},
            {'id': 54, 'url': '/assets/photos/540/DSC07888.jpg'},
            {'id': 56, 'url': '/assets/photos/540/DSC07992.jpg'},
            {'id': 35, 'url': '/assets/photos/540/DSC07640.jpg'},
            {'id': 65, 'url': '/assets/photos/540/IMG_0251.jpg'},
            {'id': 61, 'url': '/assets/photos/540/DSC08015.jpg'},
            {'id': 81, 'url': '/assets/photos/540/IMG_0279.jpg'},
            {'id': 29, 'url': '/assets/photos/540/DSC07597.jpg'},
            {'id': 55, 'url': '/assets/photos/540/DSC07891.jpg'},
            {'id': 69, 'url': '/assets/photos/540/IMG_0260.jpg'},
            {'id': 18, 'url': '/assets/photos/540/DSC07459.jpg'},
            {'id': 83, 'url': '/assets/photos/540/IMG_0281.jpg'},
            {'id': 37, 'url': '/assets/photos/540/DSC07653-2.jpg'},
            {'id': 40, 'url': '/assets/photos/540/DSC07671.jpg'},
            {'id': 34, 'url': '/assets/photos/540/DSC07637.jpg'},
            {'id': 26, 'url': '/assets/photos/540/DSC07532.jpg'},
            {'id': 78, 'url': '/assets/photos/540/IMG_0276.jpg'},
            {'id': 4, 'url': '/assets/photos/540/ACP-4.jpg'},
            {'id': 77, 'url': '/assets/photos/540/IMG_0275.jpg'},
            {'id': 9, 'url': '/assets/photos/540/ACP-9.jpg'},
            {'id': 68, 'url': '/assets/photos/540/IMG_0259.jpg'},
            {'id': 72, 'url': '/assets/photos/540/IMG_0264.jpg'},
            {'id': 87, 'url': '/assets/photos/540/IMG_0432.jpg'}
        ];
        // this.images = [
        //     {'id': 25, 'url': '/assets/photos/540/DSC07514.jpg'},
        //     {'id': 36, 'url': '/assets/photos/540/DSC07649-2.jpg'},
        //     {'id': 24, 'url': '/assets/photos/540/DSC07506.jpg'},
        //     {'id': 58, 'url': '/assets/photos/540/DSC08000.jpg'},
        //     {'id': 28, 'url': '/assets/photos/540/DSC07595.jpg'},
        //     {'id': 44, 'url': '/assets/photos/540/DSC07685-2.jpg'},
        //     {'id': 11, 'url': '/assets/photos/540/DSC07398.jpg'},
        //     {'id': 27, 'url': '/assets/photos/540/DSC07571.jpg'},
        //     {'id': 14, 'url': '/assets/photos/540/DSC07422.jpg'},
        //     {'id': 38, 'url': '/assets/photos/540/DSC07657.jpg'},
        //     {'id': 50, 'url': '/assets/photos/540/DSC07842.jpg'},
        //     {'id': 20, 'url': '/assets/photos/540/DSC07479.jpg'},
        //     {'id': 60, 'url': '/assets/photos/540/DSC08011.jpg'},
        //     {'id': 17, 'url': '/assets/photos/540/DSC07453.jpg'},
        //     {'id': 33, 'url': '/assets/photos/540/DSC07634.jpg'},
        //     {'id': 15, 'url': '/assets/photos/540/DSC07429.jpg'},
        //     {'id': 45, 'url': '/assets/photos/540/DSC07687-2.jpg'},
        //     {'id': 48, 'url': '/assets/photos/540/DSC07821.jpg'},
        //     {'id': 43, 'url': '/assets/photos/540/DSC07684-2.jpg'},
        //     {'id': 52, 'url': '/assets/photos/540/DSC07867.jpg'},
        //     {'id': 49, 'url': '/assets/photos/540/DSC07834.jpg'},
        //     {'id': 21, 'url': '/assets/photos/540/DSC07483.jpg'},
        //     {'id': 47, 'url': '/assets/photos/540/DSC07720-2.jpg'},
        //     {'id': 42, 'url': '/assets/photos/540/DSC07680-2.jpg'},
        //     {'id': 39, 'url': '/assets/photos/540/DSC07659-2.jpg'},
        //     {'id': 22, 'url': '/assets/photos/540/DSC07487.jpg'},
        //     {'id': 23, 'url': '/assets/photos/540/DSC07494.jpg'},
        //     {'id': 51, 'url': '/assets/photos/540/DSC07856.jpg'},
        //     {'id': 41, 'url': '/assets/photos/540/DSC07673-2.jpg'},
        //     {'id': 46, 'url': '/assets/photos/540/DSC07692.jpg'},
        //     {'id': 31, 'url': '/assets/photos/540/DSC07623.jpg'},
        //     {'id': 59, 'url': '/assets/photos/540/DSC08004.jpg'},
        //     {'id': 57, 'url': '/assets/photos/540/DSC07998.jpg'},
        //     {'id': 12, 'url': '/assets/photos/540/DSC07415.jpg'},
        //     {'id': 16, 'url': '/assets/photos/540/DSC07452.jpg'},
        //     {'id': 13, 'url': '/assets/photos/540/DSC07419.jpg'},
        //     {'id': 19, 'url': '/assets/photos/540/DSC07466.jpg'},
        //     {'id': 30, 'url': '/assets/photos/540/DSC07600.jpg'},
        //     {'id': 53, 'url': '/assets/photos/540/DSC07880.jpg'},
        //     {'id': 54, 'url': '/assets/photos/540/DSC07888.jpg'},
        //     {'id': 32, 'url': '/assets/photos/540/DSC07628.jpg'},
        //     {'id': 56, 'url': '/assets/photos/540/DSC07992.jpg'},
        //     {'id': 35, 'url': '/assets/photos/540/DSC07640.jpg'},
        //     {'id': 61, 'url': '/assets/photos/540/DSC08015.jpg'},
        //     {'id': 29, 'url': '/assets/photos/540/DSC07597.jpg'},
        //     {'id': 55, 'url': '/assets/photos/540/DSC07891.jpg'},
        //     {'id': 18, 'url': '/assets/photos/540/DSC07459.jpg'},
        //     {'id': 37, 'url': '/assets/photos/540/DSC07653-2.jpg'},
        //     {'id': 34, 'url': '/assets/photos/540/DSC07637.jpg'},
        //     {'id': 26, 'url': '/assets/photos/540/DSC07532.jpg'},
        //     {'id': 40, 'url': '/assets/photos/540/DSC07671.jpg'}
        // ];
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
