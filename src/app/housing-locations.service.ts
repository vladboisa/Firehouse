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
  constructor() {}
  locationSelectedSource = new BehaviorSubject<HousingLocation[]>(
    this.housingLocationList
  );
  currentHousingLocations$ = this.locationSelectedSource.asObservable();
  takeHousingLocations(location: HousingLocation[]) {
    this.locationSelectedSource.next(location);
  }

  isDetailedLocation = new BehaviorSubject<boolean>(false);
  currentDetailedLocation$ = this.isDetailedLocation.asObservable();
  takeDetailsHousingLocation(detailHouses: boolean) {
    this.isDetailedLocation.next(detailHouses);
  }

  singleLocationSelectedSource = new BehaviorSubject<HousingLocation>(this.housingLocationList[0])
  takeSingleHousingLocation(loc:HousingLocation){
    this.singleLocationSelectedSource.next(loc)
  }
}
