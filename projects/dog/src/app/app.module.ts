import { AppComponent } from './../../../../src/app/app.component';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class DogModule { }

