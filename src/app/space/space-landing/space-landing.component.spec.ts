import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceLandingComponent } from './space-landing.component';

describe('SpaceLandingComponent', () => {
  let component: SpaceLandingComponent;
  let fixture: ComponentFixture<SpaceLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
