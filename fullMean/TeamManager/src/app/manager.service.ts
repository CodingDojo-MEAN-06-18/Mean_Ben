import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { of, Observable } from 'rxjs';
import { Player } from './player';
import { PlayerList } from './data/player-data';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private base = '/api/players';
  constructor(private http: HttpClient) { }

  //Observable<Player[]>
  getPlayer(){
    console.log('Service getting all players');
    // return this.http.get<Player[]>(this.base);
    return PlayerList;
  }

  createPlayer(player: Player){
    console.log('Service creating a player', player);
    // return this.http.post<Player>(this.base, player);
    PlayerList.push(player)
    console.log(PlayerList)

  }
  deletePlayer(player: Player){
    console.log('Service deleting a player', player);
    const idex = PlayerList.indexOf(player)
    PlayerList.splice(idex,1);
    // return this.http.post<Player>(this.base, player);
  }
  //[1 =green, 2=red,0=yellow,]

  updatePlayColor(player: Player, color:number, gameNumber:number){
    console.log('Service updateing a player color', player, color,gameNumber);
      for(let playerl of PlayerList){
        if(playerl.id ===player.id){
          playerl.game[gameNumber].default[0] = color;
        }
    }
    // return this.http.post<Player>(this.base, player);
 }
}
