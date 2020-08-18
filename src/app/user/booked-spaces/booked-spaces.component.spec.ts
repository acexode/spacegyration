import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedSpacesComponent } from './booked-spaces.component';

describe('BookedSpacesComponent', () => {
  let component: BookedSpacesComponent;
  let fixture: ComponentFixture<BookedSpacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedSpacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
