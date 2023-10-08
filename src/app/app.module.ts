import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HousingListCardComponent } from './housing-list-card/housing-list-card.component';
import { HousingLocationsService } from './housing-locations.service';
const routes: Routes = [
  { path: '/', pathMatch: 'full'},
  {path: 'app', component: AppComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    HousingListCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
