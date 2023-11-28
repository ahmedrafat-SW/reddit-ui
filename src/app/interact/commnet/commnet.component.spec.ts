import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommnetComponent } from './commnet.component';

describe('CommnetComponent', () => {
  let component: CommnetComponent;
  let fixture: ComponentFixture<CommnetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommnetComponent]
    });
    fixture = TestBed.createComponent(CommnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
