import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundAdjusterComponent } from './background-adjuster.component';

describe('BackgroundAdjusterComponent', () => {
  let component: BackgroundAdjusterComponent;
  let fixture: ComponentFixture<BackgroundAdjusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundAdjusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundAdjusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
