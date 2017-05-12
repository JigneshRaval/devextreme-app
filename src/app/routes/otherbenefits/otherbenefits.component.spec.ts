import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherbenefitsComponent } from './otherbenefits.component';

describe('OtherbenefitsComponent', () => {
  let component: OtherbenefitsComponent;
  let fixture: ComponentFixture<OtherbenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherbenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherbenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
