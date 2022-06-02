import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../model/player';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http: HttpClient) { }

  findPlayersByRoom(name: String): Observable<Player[]> {
    return this.http.get<Player[]>("http://localhost:8080/game/roomPlayers/" + name);
  }

}