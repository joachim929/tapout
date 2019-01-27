import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalLinksService {
  facebook = 'https://www.facebook.com/tapoutvietnam/';
  instagram = 'https://www.instagram.com/tapoutvietnam/';
  localhost = 'http://localhost:80/Tapout/tapoutAPI/';

  constructor() { }
}
