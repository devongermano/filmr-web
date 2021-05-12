import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderV2Component } from './page-header-v2.component';

describe('PageHeaderV2Component', () => {
  let component: PageHeaderV2Component;
  let fixture: ComponentFixture<PageHeaderV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
