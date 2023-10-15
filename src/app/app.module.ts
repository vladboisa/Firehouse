import { DogModule } from 'projects/dog/src/app/app.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HousingListCardComponent } from './housing-list-card/housing-list-card.component';
const routes: Routes = [
  {path: 'list', loadComponent: () => import('projects/dog/src/app/dogs-list.component').then(x => x.DogsListComponent)},
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
    RouterModule.forChild(routes),
    DogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
