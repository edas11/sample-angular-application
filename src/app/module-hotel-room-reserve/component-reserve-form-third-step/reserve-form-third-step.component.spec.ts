import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveFormThirdStepComponent } from './reserve-form-third-step.component';

describe('ReserveFormThirdStepComponent', () => {
  let component: ReserveFormThirdStepComponent;
  let fixture: ComponentFixture<ReserveFormThirdStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveFormThirdStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveFormThirdStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
