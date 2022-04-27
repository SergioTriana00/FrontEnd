import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  constructor() { }
  msg:String[] = []
  ngOnInit(): void {

    this.msg = ["Ha matado un mounstruo", "Ha Recogido un item: SWORD", "Ha Atacado: Daño = 54"];
  }


  
}
