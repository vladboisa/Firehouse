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
  detailsHousingLocations = false;
  searchResults!: HousingLocation[] | undefined;

  updateSearchResultsLocations(results: HousingLocation[]) {
    this.searchResults = results;
  }
  constructor(private locationServices: HousingLocationsService) {
  locationServices.currentHousingLocation.subscribe((el)=>this.selectedLocation = el as any)
  locationServices.isDetailedLocation$.subscribe((detailed)=> {
    this.detailsHousingLocations = detailed
  })
  }

  ngOnInit(): void {

  }
}
