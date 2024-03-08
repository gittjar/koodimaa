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
    {id: 101, info: 'Angular, React, C#, .NET, JavaScript, SQL, Node, Azure, DevOps, AI-tools, Git ja HTML5/CSS'},
    {id: 102, info: 'Windows, Linux, MacOs, Android ja iOS'},
    {id: 103, info: 'Dropbox, Google Drive, OneDrive ja iCloud pilvipalvelut'},
    {id: 104, info: 'Domain eli verkkotunnus, webhotelli, sähköposti ja SSL-sertifikaatti'},
    {id: 105, info: 'Google, Bing, Facebook, Instagram, LinkedIn ja YouTube mainokset'},
    {id: 106, info: 'Tietoturva, tietosuoja ja tietosuojaseloste'},
    {id: 107, info: 'Käyttöliittymäsuunnittelu, käyttäjäkokemus ja käyttäjätestaus'},
    {id: 108, info: 'Käyttäjätuki, koulutus ja dokumentointi'},
    {id: 1001, info: 'Ennen ohjelmointityön aloitusta sovitaan tavoitteet ja aikataulut'},
    {id: 1002, info: 'Sovitaan yksi hinta, joka sisältää tilatun työn'},
    {id: 1003, info: 'Tilaaja määrittelee halutun laajuuden ja toiminnallisuuden'},
    {id: 1004, info: 'Toki saat kasvotonta palvelua globaalisti, mutta suosittelen kasvokkain tapaamista ja paikallista kumppania Suomesta!'},


  ];
  
  	const mydatashobby: Hobby[]= [

   ];

   const mydatasstudies: Study[]= [

   ];

  
  // t�h�n yl�puolelle voi laittaa studies taulukko
  // laita import studies ylös dataclasses (katso mallista!)
  
    return {mydatas, mydatashobby, mydatasstudies};
 
  }
  }
  