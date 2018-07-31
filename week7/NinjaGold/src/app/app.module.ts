import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from "./data.service";

import { AppComponent } from './app.component';
import { PartOneComponent } from './ninjas/part-one/part-one.component';
import { PartTwoComponent } from './ninjas/part-two/part-two.component';
import { PartThreeComponent } from './ninjas/part-three/part-three.component';

@NgModule({
  declarations: [
    AppComponent,
    PartOneComponent,
    PartTwoComponent,
    PartThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
