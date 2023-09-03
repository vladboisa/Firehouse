import { HousingLocation } from './../housing-location';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  constructor() { }
  @Input() locationList:HousingLocation[] = [];

  ngOnInit(): void {
  }
  searchHousingLocations(searchText:string) {
  }
}
