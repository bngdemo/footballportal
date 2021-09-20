import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Players } from 'src/assets/db/players';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  player: any = {
    id: 3,
    name: 'Mohamed Salah',
    team: 'Liverpool F.C.',
    profile: 'assets/img/players/mohamed_salah.png'
  }
  players: any = Players;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      console.log(id, params);
      if (id && this.players) {
        this.player = this.players.find((p: any) => p.id == id);
      }
    });
  }

  ngOnInit(): void {

  }

  goBackPage() {
    this.location.back();
  }
}
