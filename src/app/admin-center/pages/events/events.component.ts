import { Component, OnInit } from '@angular/core';

// Services
import {EventsFactoryService} from './events-factory.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventsFactoryService: EventsFactoryService) { }

  ngOnInit() {
    this.eventsFactoryService.test().subscribe(response => {
      console.log(response);
    });
  }

}
