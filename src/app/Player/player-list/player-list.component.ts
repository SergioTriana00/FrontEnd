import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/Shared/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[] = [];
  
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {

    this.loadPlayers()
  }

  delete(id: number) {
    this.playerService.delete(id).subscribe(a => this.loadPlayers())
  };

  loadPlayers(){
    this.playerService.findAll().subscribe((received)=> {this.players = received});
  }

}
