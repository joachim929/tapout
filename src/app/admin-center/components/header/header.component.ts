import { Component, OnInit } from '@angular/core';

import { PageInfoService } from '../../shared/page-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  page = '';

  constructor(private pageInfoService: PageInfoService) { }

  ngOnInit() {
  }

  setModulePage(input) {
    this.page = ': ' + input;
    this.pageInfoService.setPage(input);
  }
}
