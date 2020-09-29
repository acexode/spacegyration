import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCardsComponent } from './space-cards.component';

describe('SpaceCardsComponent', () => {
  let component: SpaceCardsComponent;
  let fixture: ComponentFixture<SpaceCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
