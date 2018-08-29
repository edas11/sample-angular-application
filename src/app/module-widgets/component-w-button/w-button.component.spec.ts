import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WButtonComponent } from './w-button.component';

describe('WButtonComponent', () => {
  let component: WButtonComponent;
  let fixture: ComponentFixture<WButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
