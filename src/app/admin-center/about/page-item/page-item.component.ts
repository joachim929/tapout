import { Component, Input } from '@angular/core';

import {ButtonMoveService} from '../../shared/button-move.service';
import {PageInfoService} from '../../shared/page-info.service';
import {ButtonDeleteService} from '../../shared/button-delete.service';
import {ButtonSaveService} from '../../shared/button-save.service';

import { PageItem } from '../../shared/page-item';

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.css']
})
export class PageItemComponent {
  @Input()
  set pageItem(pageItem: PageItem) {
    this.item = pageItem;
  }
  @Input()
  set pageIndex(pageIndex: number) {
    this.itemIndex = pageIndex;
  }
  private item;
  private itemIndex;

  constructor(
      private pageInfoService: PageInfoService,
      private buttonMoveService: ButtonMoveService,
      private buttonDeleteService: ButtonDeleteService,
      private buttonSaveService: ButtonSaveService
  ) { }
}
