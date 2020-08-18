import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookedHistoryComponent } from './admin-booked-history.component';

describe('AdminBookedHistoryComponent', () => {
  let component: AdminBookedHistoryComponent;
  let fixture: ComponentFixture<AdminBookedHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBookedHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBookedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
