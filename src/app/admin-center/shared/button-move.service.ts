import {Injectable} from '@angular/core';

import {PageInfoService} from './page-info.service';

@Injectable({
    providedIn: 'root'
})
export class ButtonMoveService {

    constructor(
        private pageInfoService: PageInfoService
    ) {
    }

    firstCheck(index) {
        return index !== 0;
    }

    lastCheck(index) {
        return (index + 1 !== this.pageInfoService.itemCount);
    }

    moveItemDown(pageItem, itemIndex) {
        if (pageItem.pagePosition < this.pageInfoService.itemCount
            && (itemIndex + 1) !== this.pageInfoService.itemCount
            && this.pageInfoService.disableButtons === false) {
            if (this.pageInfoService.pageItems[itemIndex].toggleEdit === true) {
                this.pageInfoService.toggleEdit(itemIndex);
            }

            const tempAboutItemReplacement = this.pageInfoService.pageItems[itemIndex + 1];
            tempAboutItemReplacement.pagePosition--;
            pageItem.pagePosition++;
            this.pageInfoService.pageItems[itemIndex + 1] = pageItem;
            this.pageInfoService.pageItems[itemIndex] = tempAboutItemReplacement;

            this.editPosition([this.pageInfoService.pageItems[itemIndex + 1], this.pageInfoService.pageItems[itemIndex]]);
        }
    }

    moveItemUp(pageItem, itemIndex) {
        if (pageItem.pagePosition > 1 && itemIndex !== 0 && this.pageInfoService.disableButtons === false) {
            if (this.pageInfoService.pageItems[itemIndex].toggleEdit === true) {
                this.pageInfoService.toggleEdit(itemIndex);
            }

            const tempAboutItemReplacement = this.pageInfoService.pageItems[itemIndex - 1];
            tempAboutItemReplacement.pagePosition++;
            pageItem.pagePosition--;
            this.pageInfoService.pageItems[itemIndex - 1] = pageItem;
            this.pageInfoService.pageItems[itemIndex] = tempAboutItemReplacement;

            this.editPosition([this.pageInfoService.pageItems[itemIndex - 1], this.pageInfoService.pageItems[itemIndex]]);
        }
    }

    private editPosition(pageItem) {
        this.pageInfoService.disableButtons = true;
        this.pageInfoService.updatePagePosition(pageItem, 'About')
            .subscribe(result => {
                    if (result === false) {
                        alert('Whoops something went wrong');
                    }
                    this.pageInfoService.disableButtons = false;
                }
            );
    }


}
