// t‰m‰ esitt‰‰ valetietokannan tietoja, hakee http protokollan avulla tietoja frontend sovellukseen.
// t‰m‰ poistetaan kun fronttisovellus on valmis ja voidaan alkaa k‰ytt‰m‰‰n oikeaa palvelinta.

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Mydata } from './dataclasses';
import { Hobby } from './dataclasses';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const mydatas: Mydata[]= [
    {id: 1, info: 'Angular opiskelija'},
    {id: 2, info: 'Asuu Porvoossa'},
    {id: 3, info: 'Mieliruokana Mexicana pizza'},
    {id: 4, info: 'Mielijuomana kuplavesi'},  
  ];
  
  	const mydatashobby: Hobby[]= [
  	{startyear: 1984, id: 1, info: 'Lukeminen'},
  	{startyear: 1985, id: 2, info: 'Kirjoittaminen'},
      
   ];
  
  // t‰h‰n yl‰puolelle voi laittaa studies ja hobbies taulukot
  // laita import studies dataclasses
  
    return {mydatas, mydatashobby};
 
  }
  }
  