import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceSpaceComponent } from './conference-space.component';

describe('ConferenceSpaceComponent', () => {
  let component: ConferenceSpaceComponent;
  let fixture: ComponentFixture<ConferenceSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
