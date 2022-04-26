import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemSource = new BehaviorSubject<Item>(new Item(-1,"","",0,0,"",""))
  itemSelected = this.itemSource.asObservable()

  constructor(private http: HttpClient) { }

  sendItem(item: Item){
    this.itemSource.next(item);
  }
  
  findAll(): Observable<Item[]>{
    
    return this.http.get<Item[]>("http://localhost:8080/item/list");

  }

  findById(id: number):Observable<Item>{

    return this.http.get<Item>("http://localhost:8080/item/"+id+"/get");

  }

  delete(id: number): Observable<number> {

    return this.http.get<number>("http://localhost:8080/item/"+id+"/delete")

  }

  save(item: Item): Observable<Item>{
  
    return this.http.post<Item>("http://localhost:8080/item/save",item);

  }
 

  


}
