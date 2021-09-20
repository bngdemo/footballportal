import { Component, OnInit } from '@angular/core';

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

  sliders = [
    {
      backgroundImage: 'assets/img/sliders/bg1.png',
      teamA: {
        name: 'الأرجنتين',
        flag: 'assets/img/flags/arg.png',
        score: '١',
      },
      teamB: {
        name: 'البرازيل',
        flag: 'assets/img/flags/bra.png',
        score: '٠',
      },
      group: 'الفرقة الأولي',
      stadium: 'ملعب ميشيغان'
    },
    {
      backgroundImage: 'assets/img/sliders/bg2.png',
      teamA: {
        name: 'الدنمارك',
        flag: 'assets/img/flags/den.png',
        score: '٠',
      },
      teamB: {
        name: 'فرنسا',
        flag: 'assets/img/flags/fra.png',
        score: '٠',
      },
      group: 'الفرقة الثانية',
      stadium: 'ملعب FNB'
    },
    {
      backgroundImage: 'assets/img/sliders/bg3.png',
      teamA: {
        name: 'اليابان',
        flag: 'assets/img/flags/jpn.png',
        score: '١',
      },
      teamB: {
        name: 'روسيا',
        flag: 'assets/img/flags/rus.png',
        score: '٢',
      },
      group: 'الفرقة الأولي',
      stadium: 'الملعب الأول'
    },
  ];

  games = [
    {
      teamA: {
        name: 'أوروغواي',
        flag: 'assets/img/flags/uru.png'
      },
      teamB: {
        name: 'أوروغواي',
        flag: 'assets/img/flags/por.png'
      },
      match: 'أوروغواي ضد البرتغال',
      date: '١٨/٠٢/٢٠٢١',
      daysLeft: 'باقي يوم واحد',
      location: 'لندن',
      stadium: 'ملعب ويمبلي'
    },
    {
      teamA: {
        name: 'فرنسا',
        flag: 'assets/img/flags/fra.png'
      },
      teamB: {
        name: 'الأرجنتين',
        flag: 'assets/img/flags/arg.png'
      },
      match: ' فرنسا ضد الأرجنتين',
      date: '٢٠/٠٢/٢٠٢١',
      daysLeft: 'باقي يومان',
      location: 'روسيا، سوتشي',
      stadium: 'ملعب ميشيغان'
    },
    {
      teamA: {
        name: 'البرازيل',
        flag: 'assets/img/flags/bra.png'
      },
      teamB: {
        name: 'إنجلترا',
        flag: 'assets/img/flags/eng.png'
      },
      match: 'البرازيل ضد إنجلترا',
      date: '٢١/٠٢/٢٠٢١',
      daysLeft: 'باقي ثلاث أيام',
      location: 'باسادينا',
      stadium: 'ملعب روز بول'
    },
    {
      teamA: {
        name: 'روسيا',
        flag: 'assets/img/flags/rus.png'
      },
      teamB: {
        name: 'السويد',
        flag: 'assets/img/flags/swe.png'
      },
      match: 'روسيا ضد السويد',
      date: '٢٢/٠٢/٢٠٢١',
      daysLeft: 'باقي ثلاث أيام',
      location: 'شرق راذرفورد',
      stadium: 'ملعب ميتلايف'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
