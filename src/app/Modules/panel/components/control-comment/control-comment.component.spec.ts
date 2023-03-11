import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCommentComponent } from './control-comment.component';

describe('ControlCommentComponent', () => {
  let component: ControlCommentComponent;
  let fixture: ComponentFixture<ControlCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
