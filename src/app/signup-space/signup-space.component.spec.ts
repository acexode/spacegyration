import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSpaceComponent } from './signup-space.component';

describe('SignupSpaceComponent', () => {
  let component: SignupSpaceComponent;
  let fixture: ComponentFixture<SignupSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
