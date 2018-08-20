import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WInfoPopupComponent } from './w-info-popup.component';

describe('WInfoPopupComponent', () => {
  let component: WInfoPopupComponent;
  let fixture: ComponentFixture<WInfoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WInfoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
