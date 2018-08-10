import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PlayerComponent } from './player/player.component';
import { StatusComponent } from './status/status.component';
import { CreateComponent } from './player/create/create.component';
import { ListComponent } from './player/list/list.component';
import { GamesComponent } from './status/games/games.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'players/list' },
  { path: 'players', component: PlayerComponent, children:[
    {path: 'list', component: ListComponent},
    {path: 'addplayer', component: CreateComponent},
  ] },
  { path: 'status/game', pathMatch: 'full', redirectTo: 'status/game/1' },
  { path: 'status/game', component: StatusComponent, children:[
    {path: ':id', component: GamesComponent},


  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
