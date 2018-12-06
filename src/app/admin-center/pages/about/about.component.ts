import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

// Services
import {PageInfoService} from '../../shared/page-info.service';
import {ButtonDeleteService} from '../../shared/button-delete.service';
import {ButtonMoveService} from '../../shared/button-move.service';
import {ButtonSaveService} from '../../shared/button-save.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    newItemToggle = false;
    newImageToggle = false;

    constructor(
        private router: Router,

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
