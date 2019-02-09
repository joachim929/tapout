import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventCategoryComponent } from './new-event-category.component';

describe('NewEventCategoryComponent', () => {
  let component: NewEventCategoryComponent;
  let fixture: ComponentFixture<NewEventCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
