import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Player } from '../../player';
import { ManagerService } from '../../manager.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  player: Player = new Player();
  constructor(private managerService:ManagerService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    console.log('submitting form => Service');
    this.managerService.createPlayer(this.player)
    this.player = new Player();
    form.reset();
    this.router.navigate(['players','list']);


  }


}
