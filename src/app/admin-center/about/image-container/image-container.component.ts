import { Component, Input } from '@angular/core';

import {ButtonMoveService} from '../../shared/button-move.service';
import {PageInfoService} from '../../shared/page-info.service';
import {ButtonDeleteService} from '../../shared/button-delete.service';

import {PageItem} from '../../shared/page-item';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent {

  constructor(
      private pageInfoService: PageInfoService,
      private buttonMoveService: ButtonMoveService,
      private buttonDeleteService: ButtonDeleteService
  ) {}

  private item;
  private itemIndex;

  @Input()
  set imageItem(imageItem: PageItem) {
    this.item = imageItem;
  }
  @Input()
  set imageIndex(imageIndex: number) {
    this.itemIndex = imageIndex;
  }
}
