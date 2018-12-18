import { Component, OnInit } from '@angular/core';

// Services
import { ExternalLinksService } from '../../../shared/external-links.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  facebook: string;
  instagram: string;

  constructor(
      private externalLinksService: ExternalLinksService
  ) { }

  ngOnInit() {
    this.facebook = this.externalLinksService.facebook;
    this.instagram = this.externalLinksService.instagram;
  }

}
