import { TestBed } from '@angular/core/testing';

import { EventsFactoryService } from './events-factory.service';

describe('EventsFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsFactoryService = TestBed.get(EventsFactoryService);
    expect(service).toBeTruthy();
  });
});
