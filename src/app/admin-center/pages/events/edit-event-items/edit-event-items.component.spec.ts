import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventItemsComponent } from './edit-event-items.component';

describe('EditEventItemsComponent', () => {
  let component: EditEventItemsComponent;
  let fixture: ComponentFixture<EditEventItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
