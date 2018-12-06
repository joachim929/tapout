import { Component, Input } from '@angular/core';

import {ButtonMoveService} from '../../shared/button-move.service';
import {ButtonDeleteService} from '../../shared/button-delete.service';

import {PageItem} from '../../shared/page-item';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent {
  @Input()
  set imageItem(imageItem: PageItem) {
    this.item = imageItem;
  }
  @Input()
  set imageIndex(imageIndex: number) {
    this.itemIndex = imageIndex;
  }

  constructor(
      private buttonMoveService: ButtonMoveService,
      private buttonDeleteService: ButtonDeleteService
  ) {}

  private item;
  private itemIndex;

  firstCheck(itemIndex): boolean {
    return this.buttonMoveService.firstCheck(itemIndex);
  }

  lastCheck(itemIndex): boolean {
    return this.buttonMoveService.lastCheck(itemIndex);
  }

  moveItemUp(item, itemIndex): void {
    this.buttonMoveService.moveItemUp(item, itemIndex);
  }

  moveItemDown(item, itemIndex): void {
    this.buttonMoveService.moveItemDown(item, itemIndex);
  }

  initializeDelete(item, pageName, itemIndex): void {
    this.buttonDeleteService.initializeDelete(item, pageName, itemIndex);
  }
}
