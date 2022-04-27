import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playerSource = new BehaviorSubject<Player>(new Player(-1,"","",0,0,0,0,"","",0,0))
  playerSelected = this.playerSource.asObservable()

  sendPlayer(player: Player){
    this.playerSource.next(player);
  }

  constructor(private http: HttpClient) { }

  findAll(): Observable<Player[]>{
    
    return this.http.get<Player[]>("http://localhost:8080/jugador/list");

  }

  findById(id: number):Observable<Player>{

    return this.http.get<Player>("http://localhost:8080/jugador/"+id+"/get");

  }

  delete(id: number): Observable<number> {

    return this.http.get<number>("http://localhost:8080/jugador/"+id+"/delete")

  }

  save(monster: Player): Observable<Player>{

    return this.http.post<Player>("http://localhost:8080/jugador/save",monster);

  }
}