import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/model/room';
import { RoomService } from 'src/app/Shared/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms:Room[] =  []

  constructor(private roomService: RoomService) { }


  ngOnInit(): void {

    this.loadRooms()
  }

  delete(id: number){
    this.roomService.delete(id).subscribe( a => this.loadRooms())
  }

  loadRooms(){
    this.roomService.findAll().subscribe(received=> this.rooms = received)
  }

  add(room:Room){

    this.roomService.sendRoom(room)

  }
}