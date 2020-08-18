import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookedSpacesComponent } from './admin-booked-spaces.component';

describe('AdminBookedSpacesComponent', () => {
  let component: AdminBookedSpacesComponent;
  let fixture: ComponentFixture<AdminBookedSpacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBookedSpacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBookedSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
