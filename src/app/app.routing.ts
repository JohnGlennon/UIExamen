import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DetailsComponent} from './details/details.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'api/rooms/:id', component: DetailsComponent },
  { path: '',  redirectTo: '/home', pathMatch: 'full' }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
