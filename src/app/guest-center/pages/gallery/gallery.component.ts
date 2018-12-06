import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterContentInit {

  images;

  constructor() {
  }

  ngAfterContentInit() {
    this.images = [
      {
        'id': 1,
        'url': '/assets/photos/540/0W5A4669.jpg'
      },
      {
        'id': 2,
        'url': '/assets/photos/540/0W5A4678.jpg'
      },
      {
        'id': 3,
        'url': '/assets/photos/540/0W5A4687.jpg'
      },
      {
        'id': 4,
        'url': '/assets/photos/540/0W5A4696.jpg'
      },
      {
        'id': 5,
        'url': '/assets/photos/540/0W5A4703.jpg'
      },
      {
        'id': 6,
        'url': '/assets/photos/540/0W5A4714.jpg'
      },
      {
        'id': 7,
        'url': '/assets/photos/540/0W5A4718.jpg'
      },
      {
        'id': 8,
        'url': '/assets/photos/540/0W5A4728.jpg'
      },
      {
        'id': 9,
        'url': '/assets/photos/540/0W5A4731.jpg'
      },
      {
        'id': 10,
        'url': '/assets/photos/540/0W5A4732.jpg'
      },
      {
        'id': 11,
        'url': '/assets/photos/540/0W5A4736.jpg'
      },
      {
        'id': 12,
        'url': '/assets/photos/540/0W5A4760.jpg'
      }
    ];
  }
}
