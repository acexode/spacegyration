import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunplacesComponent } from './funplaces.component';

describe('FunplacesComponent', () => {
  let component: FunplacesComponent;
  let fixture: ComponentFixture<FunplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
