import { HousingLocationsService } from './../housing-locations.service';
import { HousingLocation } from './../housing-location';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {
  constructor(readonly housingLocationsService: HousingLocationsService) {}
  ngOnInit(): void {}
  results: HousingLocation[] = [];

  searchHousingLocations(searchText: string) {
    if (!searchText) return;
    this.results = this.housingLocationsService.housingLocationList.filter((location: HousingLocation) =>
      location.city.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  selectResultsHousingLocations(results: HousingLocation[]) {
    this.housingLocationsService.takeHousingLocations(results)
  }
}