import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RoomComponent} from './room/room.component';
import {FormsModule} from '@angular/forms';
import {DetailsComponent} from './details/details.component';
import {routingModule} from './app.routing';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from './services/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    DetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
