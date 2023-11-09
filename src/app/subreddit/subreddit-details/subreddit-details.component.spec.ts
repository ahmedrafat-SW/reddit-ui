import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditDetailsComponent } from './subreddit-details.component';

describe('SubredditDetailsComponent', () => {
  let component: SubredditDetailsComponent;
  let fixture: ComponentFixture<SubredditDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubredditDetailsComponent]
    });
    fixture = TestBed.createComponent(SubredditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
