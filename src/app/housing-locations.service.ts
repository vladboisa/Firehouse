import { HousingLocation } from './housing-location';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingLocationsService {
  housingLocationList: HousingLocation[] = [
    {
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '../assets/housing-1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: '../assets/housing-2.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: '../assets/housing-3.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
  ];
  locationSelectedSource$ = new BehaviorSubject<HousingLocation[]>(
    this.housingLocationList
  );
  currentHousingLocation = this.locationSelectedSource$.asObservable();
  isDetailedLocation$ = new BehaviorSubject<boolean>(false);
  constructor() {}
  takeHousingLocation(location: HousingLocation[]) {
    this.locationSelectedSource$.next(location);
  }
  takeDetailsHousingLocation(detailHouses: boolean) {
    this.isDetailedLocation$.next(detailHouses);
  }
}
