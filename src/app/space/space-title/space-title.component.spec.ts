import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceTitleComponent } from './space-title.component';

describe('SpaceTitleComponent', () => {
  let component: SpaceTitleComponent;
  let fixture: ComponentFixture<SpaceTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
