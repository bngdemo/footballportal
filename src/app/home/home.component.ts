import { Component, OnInit } from '@angular/core';
import {footballMatchesText as text} from '../../assets/text/Text';

const lang = 'lb'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  slideOptions = {
    items: 1,
    dots: true,
    navigation: false,
    stagePadding: 30,
    margin: 10,
    loop: true
  }

  footballMatches  =text.footballMatches[lang]
  nowPlaying = text.nowPlaying[lang]
  matchesUpdate = text.matchesUpdate[lang]
  famousPlayers = text.famousPlayers[lang]
  footballHistory = text.footballHistory[lang]

  sliders = [
    {
      backgroundImage: 'assets/img/sliders/bg1.png',
      teamA: {
        name: text.argentina[lang],
        flag: 'assets/img/flags/arg.png',
        score: text.one[lang],
      },
      teamB: {
        name: text.brazil[lang],
        flag: 'assets/img/flags/bra.png',
        score: text.zero[lang],
      },
      group: text.groupA[lang],
      stadium: text.michiganStadium[lang]
    },
    {
      backgroundImage: 'assets/img/sliders/bg2.png',
      teamA: {
        name: text.denmark[lang],
        flag: 'assets/img/flags/den.png',
        score: text.zero[lang],
      },
      teamB: {
        name: text.france[lang],
        flag: 'assets/img/flags/fra.png',
        score: text.zero[lang],
      },
      group: text.groupB[lang],
      stadium: text.fnbStadium[lang]
    },
    {
      backgroundImage: 'assets/img/sliders/bg3.png',
      teamA: {
        name: text.japan[lang],
        flag: 'assets/img/flags/jpn.png',
        score: text.one[lang],
      },
      teamB: {
        name: text.russia[lang],
        flag: 'assets/img/flags/rus.png',
        score: text.two[lang],
      },
      group: text.groupA[lang],
      stadium: text.firstStadium[lang]
    },
  ];

  games = [
    {
      teamA: {
        name: text.URU[lang],
        flag: 'assets/img/flags/uru.png'
      },
      teamB: {
        name: text.POR[lang],
        flag: 'assets/img/flags/por.png'
      },
      match: text.uruguayVsportugal[lang],
      date: text.date1[lang],
      daysLeft: text.dayleft1[lang],
      location: text.london[lang],
      stadium: text.wembleyStadium[lang]
    },
    {
      teamA: {
        name: text.FRA[lang],
        flag: 'assets/img/flags/fra.png'
      },
      teamB: {
        name: text.ARG[lang],
        flag: 'assets/img/flags/arg.png'
      },
      match: text.franceVsArgentina[lang],
      date: text.date2[lang],
      daysLeft: text.daysLeft2[lang],
      location: text.russiaSochi[lang],
      stadium: text.michiganStadium[lang]
    },
    {
      teamA: {
        name: text.BRA[lang],
        flag: 'assets/img/flags/bra.png'
      },
      teamB: {
        name: text.ENG[lang],
        flag: 'assets/img/flags/eng.png'
      },
      match: text.brazilVsEngland[lang],
      date: text.date3[lang],
      daysLeft: text.daysLeft3[lang],
      location:text.pasadena[lang],
      stadium: text.roseBowl[lang]
    },
    {
      teamA: {
        name: text.RUS[lang],
        flag: 'assets/img/flags/rus.png'
      },
      teamB: {
        name: text.SWE[lang],
        flag: 'assets/img/flags/swe.png'
      },
      match: text.russiaVsSweden[lang],
      date: text.date4[lang],
      daysLeft: text.daysLeft4[lang],
      location: text.eastRutherford[lang],
      stadium: text.metlifeStadium[lang]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}


