import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WMobileNavComponent } from './w-mobile-nav.component';

describe('WMobileNavComponent', () => {
  let component: WMobileNavComponent;
  let fixture: ComponentFixture<WMobileNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WMobileNavComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
