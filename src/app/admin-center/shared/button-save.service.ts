import { Injectable } from '@angular/core';

import {PageInfoService} from './page-info.service';

@Injectable({
  providedIn: 'root'
})
export class ButtonSaveService {

  constructor(
      private pageInfoService: PageInfoService
  ) { }

  validationCheckHeading(heading): boolean {
    return heading.length < 4 || heading.length > 254;
  }

  validationCheckContent(content): boolean {
    return content.length === 0;
  }

  saveChangesToPageItem(item, itemIndex) {
    if (this.checkAllFields(item)) {
      this.pageInfoService.toggleEdit(itemIndex);
      return alert('Saved successfully');
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
}
