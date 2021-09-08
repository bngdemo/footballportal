import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {footballMatchesText as text} from '../../assets/text/Text';

const lang = 'lb'

@Component({
  selector: 'app-history-videos',
  templateUrl: './history-videos.component.html',
  styleUrls: ['./history-videos.component.css']
})
export class HistoryVideosComponent implements OnInit {

  matchesUpdate = text.matchesUpdate[lang]
  famousPlayers = text.famousPlayers[lang]
  footballHistory = text.footballHistory[lang]

  videos = [
    {
      title: {en : '"I want to have dinner with Messi!" Cristiano Ronaldo talks his greatest rival', lb : "أريد أن أتناول العشاء مع ميسي"} ,
      description: {en : 'Cristiano Ronaldo and Lionel Messi sat next to each other at the #UCLDraw' , lb : 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض  #UCLDraw'} ,
      src: 'assets/videos/1.mp4',
    },
    {
      title: {en : '"I want to have dinner with Messi!" Cristiano Ronaldo talks his greatest rival', lb : "أريد أن أتناول العشاء مع ميسي"} ,
      description: {en : 'Cristiano Ronaldo and Lionel Messi sat next to each other at the #UCLDraw' , lb : 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض  #UCLDraw'} ,
      src: 'assets/videos/1.mp4',
    },
    {
      title: {en : '"I want to have dinner with Messi!" Cristiano Ronaldo talks his greatest rival', lb : "أريد أن أتناول العشاء مع ميسي"} ,
      description: {en : 'Cristiano Ronaldo and Lionel Messi sat next to each other at the #UCLDraw' , lb : 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض  #UCLDraw'} ,
      src: 'assets/videos/1.mp4',
    }
  ]

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBackPage() {
    this.location.back();
  }
}
