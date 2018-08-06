import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { EditComponent } from './product-list/edit/edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'products', component: ProductListComponent },
  // children:[
  //  {path: 'del',
  //  component: EditComponent}
 // ]
  { path: 'create', component: ProductCreationComponent },
  // { path: 'del', component: EditComponent },
  { path: 'products/edit/:productId', component: EditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
