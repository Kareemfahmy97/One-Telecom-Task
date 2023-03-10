import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLandingComponent } from './panel-landing.component';

describe('PanelLandingComponent', () => {
  let component: PanelLandingComponent;
  let fixture: ComponentFixture<PanelLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
