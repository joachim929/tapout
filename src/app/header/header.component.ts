import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imgSrc;

  isIn = false;   // store state

  toggleState() { // click handler
    const bool = this.isIn;
    this.isIn = bool === false;
  }

  collapseMenu() {
    this.isIn = false;
  }

  constructor() { }

  ngOnInit() {
    this.imgSrc = '/assets/nav-bar-logo-scaled.png';
  }

}
