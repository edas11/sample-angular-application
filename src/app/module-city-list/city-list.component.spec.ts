import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CitiesQueryService } from '../services/cities-query.service';
import { CityListComponent } from './city-list.component';
import { CityItemComponent } from './component-city-item/city-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CityQueryResult } from '../data classes/city-query-result';
import { City } from '../data classes/city';

describe('CityListComponent', () => {
  let component: CityListComponent;
  let fixture: ComponentFixture<CityListComponent>;
  const citiesDataSpy: jasmine.SpyObj<CitiesQueryService> =
    jasmine.createSpyObj('CitiesQueryService', ['queryCities']);

  beforeEach(() => {
    citiesDataSpy.queryCities.and.returnValue([
      null, undefined,
      new CityQueryResult(new City('Berlin', 'assets/flags/de-flag.png', 'assets/cities/Berlin.jpg'), '2 hotels in total')
    ]);

    TestBed.configureTestingModule({
      declarations: [ CityListComponent, CityItemComponent ],
      providers: [
        { provide: CitiesQueryService, useValue: citiesDataSpy}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(CityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call CitiesDataSourceService to get cities', () => {
    expect(citiesDataSpy.queryCities).toHaveBeenCalled();
    const items = fixture.nativeElement.querySelectorAll('app-city-item');
    expect(items.length).toEqual(3);
    expect(items[2].querySelector('.city-name').textContent).toEqual('Berlin');
    expect(items[2].querySelector('.city-meta').textContent).toEqual('2 hotels in total');
    const images = items[2].querySelectorAll('img');
    expect(images[0].getAttribute('src')).toEqual('assets/flags/de-flag.png');
    expect(images[1].getAttribute('src')).toEqual('assets/cities/Berlin.jpg');
  });
});
