import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { ManagerService } from './manager.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PlayerComponent } from './player/player.component';
import { StatusComponent } from './status/status.component';
import { CreateComponent } from './player/create/create.component';
import { ListComponent } from './player/list/list.component';
import { GamesComponent } from './status/games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PlayerComponent,
    StatusComponent,
    CreateComponent,
    ListComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
