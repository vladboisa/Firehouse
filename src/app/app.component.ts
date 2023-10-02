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
  detailsHousingLocations:boolean | undefined; //!TODO: declare false
  searchResults!: HousingLocation[] | undefined;
  updateSearchResultsLocations(results: HousingLocation[]) {
    this.searchResults = results;
    console.log("🚀 ~ file: app.component.ts:20 ~ AppComponent ~ constructor ~ this.searchResults?.length:", this.searchResults)
    console.log("🚀 ~ file: app.component.ts:20 ~ AppComponent ~ constructor ~ this.selectedLocation:", this.selectedLocation)
    console.log("🚀 ~ file: app.component.ts:20 ~ AppComponent ~ constructor ~ this.detailsHousingLocations;:", this.detailsHousingLocations)
  }
  constructor(private locationServices: HousingLocationsService) {
    console.log(this.detailsHousingLocations);
  }
  ngOnInit(): void {
    this.locationServices.currentHousingLocation.subscribe((el)=>this.selectedLocation = el as any)
    this.locationServices.isDetailedLocation$.subscribe((detailed)=> {
      //!FIX: Detailed btn
      console.log("🚀 ~ file: app.component.ts:22 ~ AppComponent ~ this.locationServices.isDetailedLocation$.subscribe ~ detailed:", detailed)
      this.detailsHousingLocations = detailed
    })
  }
}
