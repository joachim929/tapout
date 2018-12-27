import {Component, Input, OnInit} from '@angular/core';

import {ImageItem} from '../../shared/image-item.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() image: ImageItem;

  constructor() { }

  ngOnInit() {
  }

  getAlt() {
    if (this.notNullCheck(this.image.alt)) {
      return this.image.alt;
    }
  }

  getCaption(): string|boolean {
    if (this.notNullCheck(this.image.caption)) {
      return this.image.caption;
    } else {
      return false;
    }
  }

  private notNullCheck(item): boolean {
    return typeof item !== 'undefined' || item !== null || item !== '';
  }

}
