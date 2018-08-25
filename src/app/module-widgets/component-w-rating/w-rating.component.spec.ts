import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WRatingComponent } from './w-rating.component';

describe('WRatingComponent', () => {
  let component: WRatingComponent;
  let fixture: ComponentFixture<WRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ WRatingComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(WRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
