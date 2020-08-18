import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableSpacesComponent } from './available-spaces.component';

describe('AvailableSpacesComponent', () => {
  let component: AvailableSpacesComponent;
  let fixture: ComponentFixture<AvailableSpacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableSpacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
