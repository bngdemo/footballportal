import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Players } from 'src/assets/db/players';
import {footballMatchesText as text} from '../../assets/text/Text';

const lang = 'lb'

@Component({
  selector: 'app-famous-players',
  templateUrl: './famous-players.component.html',
  styleUrls: ['./famous-players.component.css']
})
export class FamousPlayersComponent implements OnInit {


  lang = 'lb';
  famousFootballPlayer =text.famousFootballPlayer[lang]
  matchesUpdate = text.matchesUpdate[lang]
  famousPlayers = text.famousPlayers[lang]
  footballHistory = text.footballHistory[lang]
  players = Players;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBackPage() {
    this.location.back();
  }

}
