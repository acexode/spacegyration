import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupantsComponent } from './occupants.component';

describe('OccupantsComponent', () => {
  let component: OccupantsComponent;
  let fixture: ComponentFixture<OccupantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
