import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  playerList = [];
  gameNumber = 1;

  constructor(private managerService:ManagerService, private route:ActivatedRoute) {
      this.route.paramMap.subscribe(
        params =>{
          this.gameNumber = parseInt(params.get('id'))
          console.log(this.gameNumber)
        }
      )
   }

  ngOnInit() {
    this.playerList =this.managerService.getPlayer();
  }

  onColorSwitch(player,color:number){
    this.managerService.updatePlayColor(player, color,this.gameNumber );
  }

}
