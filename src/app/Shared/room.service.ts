import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room } from '../model/room';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private roomSource = new BehaviorSubject<Room>(new Room(-1,""))
  roomSelected = this.roomSource.asObservable()

  constructor(private http: HttpClient) { }

  sendRoom(room: Room){
    this.roomSource.next(room);
  }

  findAll(): Observable<Room[]>{

    console.log("called FindAll service")
    return this.http.get<Room[]>("http://localhost:8080/habitacion/list");

  }

  findById(id: number):Observable<Room>{

    return this.http.get<Room>("http://localhost:8080/habitacion/"+id+"/get");

  }

  delete(id: number): Observable<number> {

    return this.http.get<number>("http://localhost:8080/habitacion/"+id+"/delete")

  }

  save(room: Room): Observable<Room>{

    return this.http.post<Room>("http://localhost:8080/habitacion/save",room);

  }
}