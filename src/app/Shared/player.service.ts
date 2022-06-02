import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playerSource = new BehaviorSubject<Player>(new Player(-1,"","",0,0,0,0,"","",0,0));
  private upSignalSource = new BehaviorSubject<Boolean>(true);
  playerSelected = this.playerSource.asObservable()
  updateSignal = this.upSignalSource.asObservable()

  constructor(private http: HttpClient) { }

  sendPlayer(player: Player){
    this.playerSource.next(player);
  }

  updateList(){
    this.upSignalSource.next(true)
  }

  findAll(): Observable<Player[]>{
    return this.http.get<Player[]>("http://localhost:8080/player/list");
  }

  findById(id: number):Observable<Player>{
    return this.http.get<Player>("http://localhost:8080/player/"+id+"/get");
  }

  delete(id: number): Observable<number> {
    return this.http.get<number>("http://localhost:8080/player/"+id+"/delete")
  }

  save(monster: Player): Observable<Player>{
    return this.http.post<Player>("http://localhost:8080/player/save",monster);
  }
}