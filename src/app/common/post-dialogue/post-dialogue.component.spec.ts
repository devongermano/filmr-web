import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDialogueComponent } from './post-dialogue.component';

describe('PostDialogueComponent', () => {
  let component: PostDialogueComponent;
  let fixture: ComponentFixture<PostDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
