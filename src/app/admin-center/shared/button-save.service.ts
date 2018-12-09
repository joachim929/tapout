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
