import { Component, OnInit } from '@angular/core';

import {PageInfoService} from '../shared/page-info.service';

@Component({
  selector: 'app-admin-center',
  templateUrl: './admin-center.component.html',
  styleUrls: ['./admin-center.component.css']
})
export class AdminCenterComponent implements OnInit {
  page = '';

  constructor(
      private pageInfoService: PageInfoService
  ) { }

  ngOnInit() {
  }

  setModulePage(input) {
    this.page = ': ' + input;
    this.pageInfoService.setPage(input);
  }
}
