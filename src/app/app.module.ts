import { DogModule } from 'projects/dog/src/app/app.module';
import { AppDogComponent } from 'projects/dog/src/app/app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HousingListCardComponent } from './housing-list-card/housing-list-card.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: 'index', component:HousingListComponent},
  {path: 'dog', component: AppDogComponent},
  {path: 'list', loadComponent:() => import('projects/dog/src/app/dogs-list.component').then(m=> m.DogsListComponent)},
  {path: 'details/:index', loadComponent:() => import('projects/dog/src/app/dog-view.component').then(m => m.DogViewComponent)}
];
@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    HousingListCardComponent,
    AppDogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DogModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
