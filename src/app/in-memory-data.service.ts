// t�m� esitt�� valetietokannan tietoja, hakee http protokollan avulla tietoja frontend sovellukseen.
// t�m� poistetaan kun fronttisovellus on valmis ja voidaan alkaa k�ytt�m��n oikeaa palvelinta.

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Mydata } from './dataclasses';
import { Hobby } from './dataclasses';
import { Study } from './dataclasses';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const mydatas: Mydata[]= [
    {id: 101, info: 'Angular, C#, .NET, JavaScript, SQL, Node, Azure, DevOps ja HTML5/CSS'},
    {id: 1001, info: 'Windows, Linux, MacOs, Android ja iOS'},
    {id: 102, info: 'Asuu Porvoossa'},
    {id: 103, info: 'Lempiruokana Mexicana pizza'},
    {id: 104, info: 'Mielijuomana kuplavesi'},
    {id: 105, info: 'Ajokortti B'},
    {id: 106, info: 'Sotilasarvo Pioneeri'},

  ];
  
  	const mydatashobby: Hobby[]= [
  	{id: 11, item:'Nyrkkeilyhanskat', image:'../../assets/images/silta.jpg', info: 'Kuntonyrkkeilyä pari kertaa per viikko.'},
  	{id: 12, item:'Sukset', image:'../../assets/images/silta.jpg', info: 'Ulkoliikuntaa vuodenaikojen mukaan mm. murtomaahiihtoa.'},
    {id: 13, item:'Läppäri', image:'../../assets/images/coding_5.jpg', info: 'Tietotekniikka.'},
    {id: 14, item:'Skeittilauta', image:'../../assets/images/kukka.jpg', info: 'Rullailua kesällä betonilla.'},
    {id: 15, item:'Jalkapallo', image:'../../assets/images/coding_5.jpg', info: 'Apuvalmentajana mukana juniorifutiksessa.'},
   ];

   const mydatasstudies: Study[]= [
  	{id: 1001, valmistumisvuosi: 1993, koulu: 'Peruskoulu 1-9 lk'},
  	{id: 1002, valmistumisvuosi: 1999, koulu: 'Hämeenlinnan Liiketalouden ja Tietotekniikan instituutti (Merkonomi) - Tietotekniikka'},
    {id: 1003, valmistumisvuosi: 2009, koulu: 'Haaga-Helia, AMK-tutkinto, Informaatioteknologiat (Tradenomi) - Tietotekniikka ja Ohjelmointi: Java, ASP.NET, SQL, XML, Palvelimet, Tietohallinto, HTML ja CSS'},
    {id: 1004, valmistumisvuosi: 2023, koulu: 'Helsinki Business College, koodauskoulu (Tutkinnon osien suorittaminen) - Ohjelmointi: C#, .NET, JavaScript, Angular, SQL, HTML, CSS, Git, Yksikkötestaus, Azure ja DevOps '},
   ];

  
  // t�h�n yl�puolelle voi laittaa studies taulukko
  // laita import studies ylös dataclasses (katso mallista!)
  
    return {mydatas, mydatashobby, mydatasstudies};
 
  }
  }
  