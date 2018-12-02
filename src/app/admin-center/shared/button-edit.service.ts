import { Injectable } from '@angular/core';

import {PageInfoService} from './page-info.service';

@Injectable({
  providedIn: 'root'
})
export class ButtonEditService {

  constructor(
      private pageInfoService: PageInfoService
  ) {
  }
}
