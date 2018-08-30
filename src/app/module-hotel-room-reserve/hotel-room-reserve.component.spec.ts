import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomReserveComponent } from './hotel-room-reserve.component';

describe('HotelRoomReserveComponent', () => {
  let component: HotelRoomReserveComponent;
  let fixture: ComponentFixture<HotelRoomReserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelRoomReserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRoomReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
