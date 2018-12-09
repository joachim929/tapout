import {Injectable} from '@angular/core';

import {PageInfoService} from './page-info.service';

import {PageItem} from './page-item';

@Injectable({
    providedIn: 'root'
})
export class ButtonMoveService {

    constructor(
        private pageInfoService: PageInfoService
    ) { }

    firstCheck(index: number): boolean {
        return index !== 0;
    }

    lastCheck(index: number): boolean {
        return (index + 1 !== this.pageInfoService.itemCount);
    }

    editPosition(pageItem) {
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
