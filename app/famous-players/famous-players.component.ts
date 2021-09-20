import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Players } from 'src/assets/db/players';

@Component({
  selector: 'app-famous-players',
  templateUrl: './famous-players.component.html',
  styleUrls: ['./famous-players.component.css']
})
export class FamousPlayersComponent implements OnInit {

  players = Players;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBackPage() {
    this.location.back();
  }

}
