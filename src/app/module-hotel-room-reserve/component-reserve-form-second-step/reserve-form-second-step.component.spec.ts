import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveFormSecondStepComponent } from './reserve-form-second-step.component';

describe('ReserveFormSecondStepComponent', () => {
  let component: ReserveFormSecondStepComponent;
  let fixture: ComponentFixture<ReserveFormSecondStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveFormSecondStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveFormSecondStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
