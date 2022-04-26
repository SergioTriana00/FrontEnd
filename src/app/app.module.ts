import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterShowComponent } from './Monster/monster-show/monster-show.component';
import { MonsterListComponent } from './Monster/monster-list/monster-list.component';
import { ItemShowComponent } from './Item/item-show/item-show.component';
import { PlayerShowComponent } from './Player/player-show/player-show.component';
import { PlayerListComponent } from './Player/player-list/player-list.component';
import { HomeComponent } from './Home/home/home.component';
import { DesignComponent } from './Design/design/design.component';
import { MonsterDesignComponent } from './Monster/monster-design/monster-design.component';
import { ItemDesignComponent } from './Item/item-design/item-design.component';
import { ItemListComponent } from './Item/item-list/item-list.component';
import { PlayerDesignComponent } from './Player/player-design/player-design.component';
import { RoomListComponent } from './Room/room-list/room-list.component';
import { RoomShowComponent } from './Room/room-show/room-show.component';
import { RoomDesignComponent } from './Room/room-design/room-design.component';
import { MonsterCreateComponent } from './Monster/monster-create/monster-create.component';
import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { ItemCreateComponent } from './Item/item-create/item-create.component';
import { DecorativeItemShowComponent } from './Item/decorative-item-show/decorative-item-show.component';
import { PlayerCreateComponent } from './Player/player-create/player-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterShowComponent,
    MonsterListComponent,
    ItemShowComponent,
    PlayerShowComponent,
    PlayerListComponent,
    HomeComponent,
    DesignComponent,
    MonsterDesignComponent,
    ItemDesignComponent,
    ItemListComponent,
    PlayerDesignComponent,
    RoomListComponent,
    RoomShowComponent,
    RoomDesignComponent,
    MonsterCreateComponent,
    ItemCreateComponent,
    DecorativeItemShowComponent,
    PlayerCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
