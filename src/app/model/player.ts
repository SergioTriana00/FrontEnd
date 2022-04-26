import { Item } from "./item";

export class Player {

  constructor(

    public id:number,
    public name: string,
    public last_updated: string,
    public attack_level: number,
    public defence_slash: number,
    public size: number,
    public hitpoints: number,
    public examine: string,
    public wiki_url: string,
    public maxWeight: number,
    public weight: number

    ){}

    public category: string[] = [];
    public backpack: Item[] = [];

}
