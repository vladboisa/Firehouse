import { HousingLocationsService } from './../housing-locations.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';


@Component({
  selector: 'app-housing-list-card',
  templateUrl: './housing-list-card.component.html',
  styleUrls: ['./housing-list-card.component.css']
})
export class HousingListCardComponent implements OnInit {
  detailHouses!:boolean;
  @Input() searchedLocations!:HousingLocation;
  selectedLocation! : HousingLocation[];
  constructor(private locationServices: HousingLocationsService) { }
  ngOnInit(): void {
    this.locationServices.currentHousingLocation.subscribe( location => this.selectedLocation = location);
    this.locationServices.isDetailedLocation$.subscribe(detailed => this.detailHouses = detailed)
  }


/*   @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();
  @Output() detailsHousingLocations = new EventEmitter<Boolean>();
  selectHousingLocations(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }
  viewDetailsHousingLocations(detailHouses: Boolean) {
    this.detailsHousingLocations.emit(detailHouses);
  } */
  selectHousingLocation(location: HousingLocation){
    this.locationServices.selectHousingLocations(location as any);
  }
}
