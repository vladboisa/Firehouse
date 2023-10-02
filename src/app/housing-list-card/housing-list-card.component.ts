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
  selectHousingLocation(location: HousingLocation){
    this.locationServices.takeHousingLocation(location as any);
  }
  selectDetailsHousingLocation(detail:boolean){
    console.log("🚀 ~ file: housing-list-card.component.ts:24 ~ HousingListCardComponent ~ selectDetailsHousingLocation ~ detail:", detail)
    this.locationServices.takeDetailsHousingLocation(detail);
  }
}
