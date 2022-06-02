import { Item } from './item';
import { DecorativeItem } from './decorative-item';
import { Monster } from './monster';
import { Player } from './player';
export class Room {

  constructor(
    public id: number,
    public name: string
  ){}

  public monster: Monster = new Monster(0,"","",0,0,0,0,"","");
  public decorativeItems: DecorativeItem[] = [];
  public items: Item[] = [];
  public players: Player[] = [];
  public exits: Room[] = [];

}