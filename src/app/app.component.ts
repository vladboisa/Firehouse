import { HousingLocationsService } from './housing-locations.service';
import { HousingListCardComponent } from './housing-list-card/housing-list-card.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedLocation: HousingLocation | undefined;
  detailsHousingLocations!: boolean;
  searchResults!: HousingLocation[] | undefined;
  updateSearchResultsLocations(results: HousingLocation[]) {
    if (this.detailsHousingLocations) this.locationServices.takeDetailsHousingLocation(false);
    this.searchResults = results;
  }
  constructor(private locationServices: HousingLocationsService) {}
  ngOnInit(): void {
    this.locationServices.currentHousingLocations$.subscribe(
      (el) => {
        if (this.detailsHousingLocations) this.locationServices.takeDetailsHousingLocation(false);
        this.searchResults = el;}
    );
    this.locationServices.currentDetailedLocation$.subscribe((detailed) => {
      this.detailsHousingLocations = detailed;
    });
    this.locationServices.singleLocationSelectedSource.subscribe(el => {
      return this.selectedLocation = el
    })
  }
}