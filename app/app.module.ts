import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwlModule } from 'ngx-owl-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FamousPlayersComponent } from './famous-players/famous-players.component';
import { HistoryComponent } from './history/history.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { HistoryVideosComponent } from './history-videos/history-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FamousPlayersComponent,
    HistoryComponent,
    PlayerDetailsComponent,
    HistoryVideosComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
