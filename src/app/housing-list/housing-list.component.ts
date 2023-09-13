import { HousingLocation } from './../housing-location';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {
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
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();
  selectHousingLocations(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }
}
