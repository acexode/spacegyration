import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSpaceComponent } from './event-space.component';

describe('EventSpaceComponent', () => {
  let component: EventSpaceComponent;
  let fixture: ComponentFixture<EventSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
