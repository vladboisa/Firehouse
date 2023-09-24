import { HousingLocation } from './../housing-location';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {
  detailHouses = true;
  constructor() {}
  ngOnInit(): void {}
  @Input() locationList: HousingLocation[] = [];

  results: HousingLocation[] = [];
  searchHousingLocations(searchText: string) {
    if (!searchText) return;
    this.results = this.locationList.filter((location: HousingLocation) =>
      location.city.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  @Output() searchResultsEvent = new EventEmitter<HousingLocation[]>();
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();
  @Output() detailsHousingLocations = new EventEmitter<Boolean>();

  selectHousingLocations(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }
  viewDetailsHousingLocations(detailHouses: Boolean) {
    this.detailsHousingLocations.emit(detailHouses);
  }
  selectResultsHousingLocations(results: HousingLocation[]) {
    this.searchResultsEvent.emit(results);
  }
}
