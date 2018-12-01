import {Component, OnInit} from '@angular/core';

import {PageInfoService} from '../services/page-info.service';

import {PageItem} from '../services/page-item';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    itemCount: number = null;
    pageItems: PageItem[];
    selectedPageItem: PageItem;
    disableButtons = false;

    constructor(private pageInfoService: PageInfoService) {
    }

    ngOnInit() {
        this.getPageContent();
    }

    getPageContent(): void {
        this.pageInfoService.getPageItems('About')
            .subscribe(pageItems => {
                this.pageItems = pageItems;
                this.itemCount = this.pageItems.length;
                this.sortAboutItems();
                console.log(this.pageItems);
            });
    }

    private editPosition(pageItem) {
        this.disableButtons = true;
        this.pageInfoService.updatePagePosition(pageItem, 'About')
            .subscribe(result => {
                    if (result === false) {
                        alert('Whoops something went wrong');
                    }
                    this.disableButtons = false;
                }
            );
    }

    firstCheck(index) {
        return index !== 0;
    }

    lastCheck(index) {
        return (index + 1 !== this.itemCount);
    }

    sortAboutItems() {
        let pageIndex = 1;

        for (let i = 0; i < this.pageItems.length; i++) {
            this.pageItems[i].pagePosition = pageIndex;
            this.pageItems[i].toggleEdit = false;
            pageIndex++;
        }
    }

    moveItemUp(pageItem, itemIndex) {
        if (pageItem.pagePosition > 1 && itemIndex !== 0 && this.disableButtons === false) {
            if (this.pageItems[itemIndex].toggleEdit === true) {
                this.toggleEdit(itemIndex);
            }

            const tempAboutItemReplacement = this.pageItems[itemIndex - 1];
            tempAboutItemReplacement.pagePosition++;
            pageItem.pagePosition--;
            this.pageItems[itemIndex - 1] = pageItem;
            this.pageItems[itemIndex] = tempAboutItemReplacement;

            this.editPosition([this.pageItems[itemIndex - 1], this.pageItems[itemIndex]]);
        }
    }

    moveItemDown(pageItem, itemIndex) {
        if (pageItem.pagePosition < this.itemCount && (itemIndex + 1) !== this.itemCount && this.disableButtons === false) {
            if (this.pageItems[itemIndex].toggleEdit === true) {
                this.toggleEdit(itemIndex);
            }

            const tempAboutItemReplacement = this.pageItems[itemIndex + 1];
            tempAboutItemReplacement.pagePosition--;
            pageItem.pagePosition++;
            this.pageItems[itemIndex + 1] = pageItem;
            this.pageItems[itemIndex] = tempAboutItemReplacement;

            this.editPosition([this.pageItems[itemIndex + 1], this.pageItems[itemIndex]]);
        }
    }

    validationCheckHeading(heading) {
        return heading.length < 4 || heading.length > 254;
    }

    validationCheckContent(content) {
        return content.length === 0;
    }

    initializeEdit(item, itemIndex) {
        this.selectedPageItem = item;
        this.pageItems[itemIndex].toggleEdit = !this.pageItems[itemIndex].toggleEdit;
    }

    cancelEdit(item, itemIndex) {
        console.log(item);
        console.log(this.selectedPageItem);
        this.pageItems[itemIndex].toggleEdit = !this.pageItems[itemIndex].toggleEdit;
    }

    toggleEdit(itemIndex) {
        this.pageItems[itemIndex].toggleEdit = !this.pageItems[itemIndex].toggleEdit;
    }

    saveChangesToPageItem(item, itemIndex) {
        if (this.checkAllFields(item)) {
            this.toggleEdit(itemIndex);
            return alert('Saved successfully');
        } else {
            return alert('Can\'t save right now, make sure all the input boxes are filled in correctly');
        }
    }

    private checkAllFields(item) {
        return !this.validationCheckHeading(item.enContent) && !this.validationCheckContent(item.vnContent)
            && !this.validationCheckHeading(item.enHeading) && !this.validationCheckHeading(item.vnHeading);
    }


}
