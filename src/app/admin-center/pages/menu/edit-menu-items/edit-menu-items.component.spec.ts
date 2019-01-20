import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuItemsComponent } from './edit-menu-items.component';

describe('EditMenuItemsComponent', () => {
  let component: EditMenuItemsComponent;
  let fixture: ComponentFixture<EditMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
