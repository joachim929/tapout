import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapoutDateTimePickerComponent } from './tapout-date-time-picker.component';

describe('TapoutDateTimePickerComponent', () => {
  let component: TapoutDateTimePickerComponent;
  let fixture: ComponentFixture<TapoutDateTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapoutDateTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapoutDateTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
