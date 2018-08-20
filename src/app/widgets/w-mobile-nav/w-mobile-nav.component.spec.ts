import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WMobileNavComponent } from './w-mobile-nav.component';

describe('WMobileNavComponent', () => {
  let component: WMobileNavComponent;
  let fixture: ComponentFixture<WMobileNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WMobileNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WMobileNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
