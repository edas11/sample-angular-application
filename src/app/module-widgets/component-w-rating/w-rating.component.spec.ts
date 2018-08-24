import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WRatingComponent } from './w-rating.component';

describe('WRatingComponent', () => {
  let component: WRatingComponent;
  let fixture: ComponentFixture<WRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
