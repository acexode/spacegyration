import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeSpaceComponent } from './office-space.component';

describe('OfficeSpaceComponent', () => {
  let component: OfficeSpaceComponent;
  let fixture: ComponentFixture<OfficeSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
