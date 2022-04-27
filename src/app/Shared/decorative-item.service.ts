import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DecorativeItem } from '../model/decorative-item';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class DecorativeItemService {

  private decoItemSource = new BehaviorSubject<DecorativeItem>(new DecorativeItem(-1,""))
  decoItemSelected = this.decoItemSource.asObservable()

  sendItem(decoItem: DecorativeItem){
    this.decoItemSource.next(decoItem);
  }

  constructor(private http: HttpClient) { }

  findAll(): Observable<DecorativeItem[]>{
    
    return this.http.get<DecorativeItem[]>("http://localhost:8080/decoItem/list");

  }

  findById(id: number):Observable<DecorativeItem>{

    return this.http.get<DecorativeItem>("http://localhost:8080/decoItem/"+id+"/get");

  }

  delete(id: number): Observable<number> {

    return this.http.get<number>("http://localhost:8080/decoItem/"+id+"/delete")

  }

  save(item: DecorativeItem): Observable<DecorativeItem>{

    return this.http.post<DecorativeItem>("http://localhost:8080/decoItem/save",item);

  }
}