import { MonsterService } from 'src/app/Shared/monster.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Room } from 'src/app/model/room';
import { RoomService } from 'src/app/Shared/room.service';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Player } from 'src/app/model/player';
import { Monster } from 'src/app/model/monster';
import { PlayerService } from 'src/app/Shared/player.service';
import { GameService } from 'src/app/Shared/game.service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  @ViewChild('logContainer') log!: ElementRef;

  player: Player = new Player(0, "", "", 0, 0, 0, 0, "", "", 0, 0);
  room: Room = new Room(-1, "");

  addItemAvaliable: Boolean = false;
  attackAvaliable: Boolean = true;

  monsterHitpoints: number = 0;
  playerHitpoints: number = 0;
  monsterDeath: Boolean = false;



  constructor(

    private roomService: RoomService,
    private playerService: PlayerService,
    private game: GameService,
    private render2: Renderer2

  ) { }

  ngOnInit(): void {

    this.playerService.findById(30).subscribe(player => {
      this.player = player;

      this.roomService.findById(player.location.id).subscribe(room => {

        this.room = room
        this.monsterHitpoints = room.monster?.hitpoints
        this.playerHitpoints = player.hitpoints;

        this.game.findPlayersByRoom(room.name).subscribe(roomPlayers => {
          console.log(roomPlayers);
          this.room.players = roomPlayers;
        })

      })

    });

  }
  attackMonster() {

    let log = this.log.nativeElement;
    let div = this.render2.createElement('div');


    let damage = this.getRandomArbitrary(0, this.player.attack_level) - this.getRandomArbitrary(0, this.room.monster.defence_slash)

    if (damage < 0) {
      damage = 0;
    }
    
    let text = this.render2.createText(this.player.name + " " + " attacked the monster " + Math.floor(damage) + " damage");
    this.monsterHitpoints = this.monsterHitpoints - damage;

   

    if (this.monsterHitpoints <= 0) {

      this.attackAvaliable = false;
      this.addItemAvaliable = true;
      this.monsterDeath = true;

      text = this.render2.createText('The monster Died - Get your Treasures');
    }

    this.render2.appendChild(div, text)
    this.render2.appendChild(log, div)

    if(this.monsterDeath == false){
      this.getDamage()
    }
    
  }

  collectItem(item: Item) {

    let log = this.log.nativeElement;
    let div = this.render2.createElement('div');

    if (this.player.weight + item.weight < this.player.maxWeight) {
      this.room.items = this.room.items.filter(itemR => itemR.name != item.name);
      this.player.backpack.push(item);
      this.player.weight = this.player.weight + item.weight;

      let text = this.render2.createText(this.player.name + " Picked up a " + item.name)
      this.render2.appendChild(div, text)
      this.render2.appendChild(log, div)
    }


  }

  changeRoom(room: Room) {

    let log = this.log.nativeElement;
    let div = this.render2.createElement('div');

    if(this.monsterDeath == false){

      this.getDamage()

    }

    this.roomService.findById(room.id).subscribe(roomM => {

      

      this.room = roomM;
      this.monsterHitpoints = this.room.monster.hitpoints;
      this.attackAvaliable = true;

      let text = this.render2.createText(this.player.name + " Went to " + this.room.name )
      this.render2.appendChild(div, text)
      this.render2.appendChild(log, div)

    })



  }

  dropItem(item: Item) {
    let log = this.log.nativeElement;
    let div = this.render2.createElement('div');

    this.player.backpack = this.player.backpack.filter(itemB => itemB.name != item.name);
    this.player.weight = this.player.weight - item.weight;
    this.room.items.push(item)

    let text = this.render2.createText(this.player.name + " Droped a " + item.name)
    this.render2.appendChild(div, text)
    this.render2.appendChild(log, div)
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }


  getDamage() {

    let log = this.log.nativeElement;
    let div = this.render2.createElement('div');

    let damage = this.getRandomArbitrary(0, this.room.monster.attack_level) - this.getRandomArbitrary(0, this.player.defence_slash)

    if (damage < 0) {
      damage = 0;
    }

    let text = this.render2.createText(this.room.monster.name + " " + " attacked." + Math.floor(damage) + " damage");
    this.playerHitpoints = this.playerHitpoints - damage;

    if (this.playerHitpoints <= 0) {

      this.attackAvaliable = false;
      this.addItemAvaliable = true;

      text = this.render2.createText('YOU DIED');
    }

    this.render2.appendChild(div, text)
    this.render2.appendChild(log, div)

  }

}

