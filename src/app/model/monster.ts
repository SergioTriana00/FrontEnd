export class Monster {

  constructor(
    public id:number,
    public name: string,
    public last_updated: string,
    public attack_level: number,
    public defence_slash: number,
    public size: number,
    public hitpoints: number,
    public examine: string,
    public wiki_url: string
    ){}

    public category: string[] = [];

}
