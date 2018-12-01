import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent {

  private pageImage;

  @Input()
  set img(img: object) {
    this.pageImage = img;
  }

}
