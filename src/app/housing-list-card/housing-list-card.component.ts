import { HousingLocationsService } from './../housing-locations.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';


@Component({
  selector: 'app-housing-list-card',
  templateUrl: './housing-list-card.component.html',
  styleUrls: ['./housing-list-card.component.css']
})
export class HousingListCardComponent implements OnInit {
  btnStyleDetailed !: boolean;
  isDetailedHouses!:boolean;
  showOrHide = 'Show';
  @Input() searchedLocations!:HousingLocation;
  selectedLocation! : HousingLocation[];
  constructor(public locationServices: HousingLocationsService) { }
  ngOnInit(): void {
    this.locationServices.currentHousingLocation$.subscribe( location => this.selectedLocation = location);
    this.locationServices.currentDetailedLocation$.subscribe(detailed => this.isDetailedHouses = detailed)
  }
  selectHousingLocation(location: HousingLocation){
    this.locationServices.takeHousingLocation(location as any);
  }
  selectDetailsHousingLocation(details:boolean){
    this.isDetailedHouses ? this.showOrHide = 'Hide' : this.showOrHide = 'Show';
    this.locationServices.takeDetailsHousingLocation(details);
  }
}
