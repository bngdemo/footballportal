import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-videos',
  templateUrl: './history-videos.component.html',
  styleUrls: ['./history-videos.component.css']
})
export class HistoryVideosComponent implements OnInit {

  videos = [
    {
      title: 'أريد أن أتناول العشاء مع ميسي',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/1_p.mp4',
    },
    {
      title: 'أريد أن أتناول العشاء مع ميسي',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/2_p.mp4',
    },
    {
      title: 'أريد أن أتناول العشاء مع ميسي',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/1_p.mp4',
    }
  ]

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBackPage() {
    this.location.back();
  }
}
