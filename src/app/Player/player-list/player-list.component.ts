import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/Shared/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[] = [];
  design: boolean = false;

  constructor(private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    if(this.router.url == '/admin'){

      this.design = true;
    }

    this.loadPlayers()
  }

  delete(id: number) {
    this.playerService.delete(id).subscribe(a => this.loadPlayers())
  };

  loadPlayers(){
    this.playerService.findAll().subscribe((received)=> {this.players = received});
  }

  add(player:Player){

    this.playerService.sendPlayer(player)

  }
}