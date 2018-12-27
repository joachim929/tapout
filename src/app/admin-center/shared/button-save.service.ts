import { Injectable } from '@angular/core';

import {PageInfoService} from './page-info.service';

@Injectable({
  providedIn: 'root'
})
export class ButtonSaveService {

  constructor(
      private pageInfoService: PageInfoService
  ) { }

  validationCheckHeading(heading: string): boolean {
    return heading.length < 4 || heading.length > 254;
  }

  validationCheckContent(content: string): boolean {
    return content.length === 0;
  }

  saveChangesToPageItem(item, itemIndex) {
    if (this.checkAllFields(item)) {
      item.toggleEdit = !item.toggleEdit;
      this.editPageItem(item);
    } else {
      return alert('Can\'t save right now, make sure all the input boxes are filled in correctly');
    }
  }

  private checkAllFields(item): boolean {
    return !this.validationCheckContent(item.enContent)
        && !this.validationCheckContent(item.vnContent)
        && !this.validationCheckHeading(item.enHeading)
        && !this.validationCheckHeading(item.vnHeading);
  }

  private editPageItem(pageItem) {
    this.pageInfoService.disableButtons = true;
    this.pageInfoService.updatePageItem(pageItem, 'About')
        .subscribe(result => {
              if (result === false) {
                alert('Whoops something went wrong');
              }
              this.pageInfoService.disableButtons = false;
            }
        );
  }
}
