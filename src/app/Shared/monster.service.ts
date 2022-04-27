import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, of, Subject } from 'rxjs';
import { Monster } from '../model/monster';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  private monsterSource = new BehaviorSubject<Monster>( new Monster(-1,"-- NONE --","",0,0,0,0,"",""))
  monsterSelected = this.monsterSource.asObservable()

  sendMonster(monster: Monster){
    this.monsterSource.next(monster);
  }

  constructor(private http: HttpClient) {}

  findAll(): Observable<Monster[]>{
    
    return this.http.get<Monster[]>("http://localhost:8080/monstruo/list");

  }

  findById(id: number):Observable<Monster>{

    return this.http.get<Monster>("http://localhost:8080/monstruo/"+id+"/get");

  }

  delete(id: number): Observable<number> {

    return this.http.get<number>("http://localhost:8080/monstruo/"+id+"/delete")

  }

  save(monster: Monster): Observable<Monster>{

    return this.http.post<Monster>("http://localhost:8080/monstruo/save",monster);

  }
 
}