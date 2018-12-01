import {Component, OnInit} from '@angular/core';

// Services
import {PageInfoService} from '../shared/page-info.service';
import {ButtonDeleteService} from '../shared/button-delete.service';
import {ButtonMoveService} from '../shared/button-move.service';
import {ButtonSaveService} from '../shared/button-save.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor(
        private pageInfoService: PageInfoService,
        private buttonDeleteService: ButtonDeleteService,
        private buttonMoveService: ButtonMoveService,
        private buttonSaveService: ButtonSaveService
    ) {
    }

    ngOnInit() {
        this.pageInfoService.getPageContent('About');
    }
}
