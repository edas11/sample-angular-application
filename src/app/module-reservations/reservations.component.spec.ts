import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsComponent } from './reservations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ReservationsComponent', () => {
  let component: ReservationsComponent;
  let fixture: ComponentFixture<ReservationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationsComponent ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
