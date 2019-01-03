import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import {FormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import {routingModule} from './app.routing';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    DetailsComponent,
    HomeComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
