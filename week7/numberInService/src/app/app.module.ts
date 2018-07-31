import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenOneComponent } from './generators/gen-one/gen-one.component';
import { GenTwoComponent } from './generators/gen-two/gen-two.component';
import { GenThreeComponent } from './generators/gen-three/gen-three.component';


import {GenService} from "./gen.service";


@NgModule({
  declarations: [
    AppComponent,
    GenOneComponent,
    GenTwoComponent,
    GenThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
