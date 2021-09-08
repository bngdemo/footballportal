import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  featuredNewsSlideOptions = {
    items: 1,
    dots: false,
    navigation: false,
    stagePadding: 30,
    margin: 10,
    loop: true
  }

  topNewsSlideOptions = {
    items: 2,
    dots: false,
    navigation: false,
    margin: 10,
    loop: false
  }

  featuredNews = [
    {
      promImgUrl: 'assets/img/news/featured/1.png',
      headline: 'When Wambach was on top of the world',
      badge: 'Breaking',
      date: '15 Jun 2021'
    }
  ];

  topNews = [
    {
      promImgUrl: 'assets/img/news/top/1.png',
      headline: 'It\'ll take a while to absorb this',
      date: '14 Jan 2021'
    },
    {
      promImgUrl: 'assets/img/news/top/2.png',
      headline: 'Mattia Agnese, the young here',
      date: '14 Jan 2021'
    },
    {
      promImgUrl: 'assets/img/news/top/1.png',
      headline: 'It\'ll take a while to absorb this',
      date: '14 Jan 2021'
    }
  ]

  publishedNews = [
    {
      promImgUrl: 'assets/img/news/published/1.png',
      headline: 'Sinclair honoured at The Best Awards',
      date: '11 Jan 2021'
    },
    {
      promImgUrl: 'assets/img/news/published/2.png',
      headline: 'Cristiano Ronaldo celebrates his 100th Portugal goal',
      date: '10 Jan 2021'
    }
  ]

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBackPage() {
    this.location.back();
  }

}
