import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/model/monster';
import { MonsterService } from 'src/app/Shared/monster.service';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit {

  monsters:Monster[] = [];
  constructor(private monsterService: MonsterService) { }

  ngOnInit(): void {

    this.loadMonsters()
  } 
  
  delete(id: number) {
    this.monsterService.delete(id).subscribe(a => this.loadMonsters())
  };

  loadMonsters(){
    this.monsterService.findAll().subscribe((received)=> {this.monsters = received});
  }
}
