import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Observer, of, Subject } from 'rxjs';
import { Monster } from '../model/monster';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  
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
