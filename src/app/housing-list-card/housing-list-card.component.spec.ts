import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingListCardComponent } from './housing-list-card.component';

describe('HousingListCardComponent', () => {
  let component: HousingListCardComponent;
  let fixture: ComponentFixture<HousingListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
