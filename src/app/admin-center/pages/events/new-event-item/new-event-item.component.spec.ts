import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventItemComponent } from './new-event-item.component';

describe('NewEventItemComponent', () => {
  let component: NewEventItemComponent;
  let fixture: ComponentFixture<NewEventItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
