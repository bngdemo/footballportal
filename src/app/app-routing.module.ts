import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamousPlayersComponent } from './famous-players/famous-players.component';
import { HistoryVideosComponent } from './history-videos/history-videos.component';
import { HomeComponent } from './home/home.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'famous-players', component: FamousPlayersComponent },
  { path: 'famous-players/:id', component: PlayerDetailsComponent },
  { path: 'history', component: HistoryVideosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
