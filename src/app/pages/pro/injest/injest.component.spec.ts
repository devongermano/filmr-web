import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjestComponent } from './injest.component';

describe('InjestComponent', () => {
  let component: InjestComponent;
  let fixture: ComponentFixture<InjestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
