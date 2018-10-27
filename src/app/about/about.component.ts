import { Component, OnInit } from '@angular/core';
import { INDIVIDUALS } from './about-individuals';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  individuals = INDIVIDUALS;

  constructor() { }

  ngOnInit() {
  }

}
