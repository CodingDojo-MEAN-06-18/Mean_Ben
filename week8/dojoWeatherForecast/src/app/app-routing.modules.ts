import { SeattleComponent } from './cities/seattle/seattle.component';
import { SanJoseComponent } from './cities/san-jose/san-jose.component';
import { BurbankComponent } from './cities/burbank/burbank.component';
import { DallasComponent } from './cities/dallas/dallas.component';
import { WashingtonDCComponent } from './cities/washington-dc/washington-dc.component';
import { ChicagoComponent } from './cities/chicago/chicago.component';
import { CitiesComponent } from './cities/cities.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    children: []
  }
  {
    path: 'cities',
    component: CitiesComponent,
    children: [
      {
        path: 'seattle',
        component: SeattleComponent,
      },
      {
        path: 'sanjose',
        component: SanJoseComponent,
      },
      {
        path: 'burbank',
        component: BurbankComponent,
      },
      {
        path: 'dallas',
        component: DallasComponent,
      },
      {
        path: 'washington',
        component: WashingtonDCComponent,
      },
      {
        path: 'chicago',
        component: ChicagoComponent,
      }
    ]
  }

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}
