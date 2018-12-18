import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

// Services
import {PageInfoService} from '../../shared/page-info.service';
import {ButtonDeleteService} from '../../shared/button-delete.service';
import {ButtonMoveService} from '../../shared/button-move.service';
import {ButtonSaveService} from '../../shared/button-save.service';

// Interfaces
import {PageItem} from '../../shared/page-item';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    newItemToggle = false;
    newImageToggle = false;

    selectedPageItem: PageItem;

    pageItems: PageItem[];

    constructor(
        private router: Router,

        private pageInfoService: PageInfoService,
        private buttonDeleteService: ButtonDeleteService,
        private buttonMoveService: ButtonMoveService,
        private buttonSaveService: ButtonSaveService
    ) {
    }

    ngOnInit() {
        this.getPageContent('About');
    }

    getPageContent(page): void {
        this.pageInfoService.getPageItems(page)
            .subscribe(pageItems => {
                this.pageItems = this.pageInfoService.sortAboutItems(pageItems);
                this.pageInfoService.setItemCount(this.pageItems.length);
                console.log(this.pageItems);
            });
    }

    firstCheck(itemIndex): boolean {
        return this.buttonMoveService.firstCheck(itemIndex);
    }

    lastCheck(itemIndex): boolean {
        return this.buttonMoveService.lastCheck(itemIndex);
    }

    moveItemDown(pageItem, itemIndex) {
        if (pageItem.pagePosition < this.pageInfoService.itemCount
            && (itemIndex + 1) !== this.pageInfoService.itemCount
            && this.pageInfoService.disableButtons === false) {
            if (pageItem.toggleEdit === true) {
                this.pageItems[itemIndex].toggleEdit = !this.pageItems[itemIndex].toggleEdit;
            }

            const tempItem = this.pageItems[itemIndex + 1];
            tempItem.pagePosition--;
            pageItem.pagePosition++;
            this.pageItems[itemIndex + 1] = pageItem;
            this.pageItems[itemIndex] = tempItem;

            this.buttonMoveService.editPosition([this.pageItems[itemIndex + 1], this.pageItems[itemIndex]]);
        }
    }

    moveItemUp(pageItem, itemIndex) {
        if (pageItem.pagePosition > 1 && itemIndex !== 0 && this.pageInfoService.disableButtons === false) {
            if (this.pageItems[itemIndex].toggleEdit === true) {
                this.pageItems[itemIndex].toggleEdit = !this.pageItems[itemIndex].toggleEdit;
            }

            const tempAboutItemReplacement = this.pageItems[itemIndex - 1];
            tempAboutItemReplacement.pagePosition++;
            pageItem.pagePosition--;
            this.pageItems[itemIndex - 1] = pageItem;
            this.pageItems[itemIndex] = tempAboutItemReplacement;

            this.buttonMoveService.editPosition([this.pageItems[itemIndex - 1], this.pageItems[itemIndex]]);
        }
    }

    initializeEdit(item, itemIndex) {
        this.selectedPageItem = Object.assign({}, item);
        this.pageItems[itemIndex].toggleEdit = !this.pageItems[itemIndex].toggleEdit;
    }

    cancelEdit(itemIndex) {
        this.pageItems[itemIndex].toggleEdit = !this.pageItems[itemIndex].toggleEdit;
        this.pageItems[itemIndex] = this.selectedPageItem;
    }

    initializeDelete(pageItem, pageName, itemIndex): void {
        const deleteCheck = confirm('Click \'OK\' to delete');
        if (deleteCheck) {
            this.selectedPageItem = Object.assign({}, pageItem);
            this.buttonDeleteService.deleteRequest(pageItem, pageName)
                .subscribe(result => {
                        if (result === false) {
                            alert('Whoops something went wrong');
                            this.pageItems[itemIndex] = this.selectedPageItem;
                        } else {
                            this.selectedPageItem = null;
                            pageItem = null;
                            this.pageItems.splice(itemIndex, 1);
                            this.pageItems = this.pageInfoService.sortAboutItems(this.pageItems);
                        }
                    }
                );
        }
    }

    saveChangesToPageItem(item, itemIndex) {
        this.buttonSaveService.saveChangesToPageItem(item, itemIndex);
    }

    validationCheckContent(content: string): boolean {
        return this.buttonSaveService.validationCheckContent(content);
    }

    validationCheckHeading(heading: string): boolean {
        return this.buttonSaveService.validationCheckHeading(heading);
    }

    newItemBack(): void {
        this.newItemToggle = false;
        this.newImageToggle = false;
    }
}
