import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';
import { Player } from '../../player';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  playerList = [];
  constructor(private managerService:ManagerService) { }

  ngOnInit() {
    this.playerList =this.managerService.getPlayer()
  }

  onDel(player: Player){
    this.managerService.deletePlayer(player);
  }

}
