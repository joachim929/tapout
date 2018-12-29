import {Component, OnInit} from '@angular/core';

import {PageInfoService} from '../../shared/page-info.service';

import {NewItem} from './new-item.model';

@Component({
    selector: 'app-new-item',
    templateUrl: './new-item.component.html',
    styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
    model: NewItem;

    enContentInvalid = false;
    enHeadingInvalid = false;

    pagePositionInvalid = false;

    vnHeadingInvalid = false;
    vnContentInvalid = false;

    touched: boolean;

    constructor(private pageInfoService: PageInfoService) {
        this.touched = false;
    }

    ngOnInit() {
        this.model = new NewItem();
    }

    saveItem() {
        if (this.checkAllFields()) {
            this.addPageItem();
        } else {
            console.log('validation failed');
        }
    }

    formatPagePosition() {
        this.touched = true;
        this.model.pagePosition = Math.round(this.model.pagePosition);
        if (this.model.pagePosition < 1 || this.model.pagePosition > this.pageInfoService.getItemCount() + 1) {
            this.model.pagePosition = this.pageInfoService.getItemCount() + 1;
        }
    }

    clearItem() {
        this.enHeadingInvalid = false;
        this.enContentInvalid = false;
        this.pagePositionInvalid = false;
        this.vnHeadingInvalid = false;
        this.vnContentInvalid = false;
        this.touched = false;
        this.model.pagePosition = this.pageInfoService.getItemCount() + 1;
        this.model.enHeading = '';
        this.model.enContent = '';
        this.model.vnHeading = '';
        this.model.vnContent = '';
    }

    checkEnContent(): void {
        this.touched = true;
        if (!this.checkContent(this.model.enContent)) {
            this.enContentInvalid = true;
        } else {
            this.enContentInvalid = false;
        }
    }

    checkVnContent(): void {
        this.touched = true;
        if (!this.checkContent(this.model.vnContent)) {
            this.vnContentInvalid = true;
        } else {
            this.vnContentInvalid = false;
        }
    }

    checkEnHeading(): void {
        this.touched = true;
        if (!this.checkHeading(this.model.enHeading)) {
            this.enHeadingInvalid = true;
        } else {
            this.enHeadingInvalid = false;
        }
    }

    checkVnHeading(): void {
        this.touched = true;
        if (!this.checkHeading(this.model.vnHeading)) {
            this.vnHeadingInvalid = true;
        } else {
            this.vnHeadingInvalid = false;
        }
    }

    private checkAllFields(): boolean {
        let check = true;
        console.log(this.touched);
        if (this.touched === true) {
            if (this.enHeadingInvalid === true || this.enContentInvalid === true ||
                this.vnHeadingInvalid === true || this.vnContentInvalid === true ||
                this.pagePositionInvalid === true) {
                check = false;
            }
        } else {
            check = false;
        }
        console.log(this.model.enContent, this.model.enHeading, this.model.vnHeading, this.model.vnContent, this.model.pagePosition);
        return check;
    }

    private checkHeading(heading: string): boolean {
        let check = false;
        if (this.checkContent(heading)) {
            if (heading.length < 255) {
                check = true;
            }
        } else {
            console.log('Heading: ' + heading);
        }
        return check;
    }

    private checkContent(content: string): boolean {
        let check = false;
        if (content) {
            if (content.length > 0) {
                check = true;
            }
        } else {
            console.log('Content: ' + content);
        }
        return check;
    }

    private addPageItem() {
        this.pageInfoService.disableButtons = true;
        this.pageInfoService.newPageItem(this.model, 'About')
            .subscribe(result => {
                if (result === false) {
                    alert('Whoops something went wrong');
                }
                this.pageInfoService.disableButtons = false;
            });
    }
}
