import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveFormFirstStepComponent } from './reserve-form-first-step.component';

describe('ReserveFormFirstStepComponent', () => {
  let component: ReserveFormFirstStepComponent;
  let fixture: ComponentFixture<ReserveFormFirstStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveFormFirstStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveFormFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
