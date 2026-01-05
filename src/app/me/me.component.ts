import { Component, OnInit } from '@angular/core';
import { Mydata } from '../dataclasses';
import { HomepageService } from '../homepage.service';
import { content } from './content';


@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit { 
  
  content = content;
  mydatas: Mydata[] = [];
  
  pricingCards = [
    {
      name: 'Yksittäiset verkkosivut',
      description: 'Yhden sivun kotisivu (one-pager)',
      price: '€19',
      period: 'per kk + ALV 25,5%',
      icon: 'bi-file-earmark-text',
      terms: 'Sivuston rakentaminen sisältyy hintaan, kun sopimus on vähintään 12 kk. Hinnat ovat suuntaa-antavia.',
      featured: true,
      colorClass: 'cyan'
    },
    {
      name: 'Laajemmat sivustot',
      description: '2-5 sivun verkkosivustot',
      price: '€49',
      period: 'per kk + ALV 25,5%',
      icon: 'bi-browser-chrome',
      terms: 'Sivuston rakentaminen sisältyy hintaan, kun sopimus on vähintään 12 kk. Hinnat ovat suuntaa-antavia.',
      featured: false,
      colorClass: 'purple'
    },
    {
      name: 'Tietokantaohjelmointi',
      description: 'Räätälöidyt tietokantaratkaisut',
      price: '€120',
      period: 'per tunti + ALV 25,5%',
      icon: 'bi-database',
      terms: 'Laajemmat projektit sovitaan erikseen. Pyydä tarkempi tarjous - hinnat ovat suuntaa-antavia.',
      featured: false,
      colorClass: 'pink'
    },
    {
      name: 'Web-pohjaiset ohjelmointityöt',
      description: 'Räätälöidyt sovellukset ja API:t',
      price: '€120',
      period: 'per tunti + ALV 25,5%',
      icon: 'bi-code-slash',
      terms: 'Laajemmat projektit sovitaan erikseen. Pyydä tarkempi tarjous - hinnat ovat suuntaa-antavia.',
      featured: false,
      colorClass: 'green'
    }
  ];
  
  constructor(private hpservice: HomepageService) { }
  
  getMydata(): void {
    this.hpservice.getMydata().subscribe(mydatas => this.mydatas = mydatas);
}

  ngOnInit(): void {
    this.getMydata();
  }

}

