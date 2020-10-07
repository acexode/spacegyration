import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSettingsComponent } from './banner-settings.component';

describe('BannerSettingsComponent', () => {
  let component: BannerSettingsComponent;
  let fixture: ComponentFixture<BannerSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
