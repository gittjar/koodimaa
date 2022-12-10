import { Injectable } from '@angular/core';
// HttpClient tarvitaan datan lähettämiseen palvelimelle ja sen hakemiseen palvelimelta
import { HttpClient} from '@angular/common/http';
// Palvelimelta tuleva data toimitetaan komponentille Observablena eli reaktiivisesti
import { Observable } from 'rxjs';
// tietotyyppi
import { Mydata } from './dataclasses';
import { Hobby } from './dataclasses';


@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  
//valepalvelimen osoite, josta saadaan mydata, hobby jne.

	mydataurl = 'api/mydatas';
    hobbiessurl = 'api/mydatashobby';

// liitetään injektori HttpService  - olio tähän luokkaan konsuktorin argumenttina (Depency injection)
  constructor(private http: HttpClient) { }

  // tehdään pyyntö palvelimelle jolla haetaan tieto observablena
  getMydata(): Observable <Mydata[]>
  {
    return this.http.get<Mydata[]>(this.mydataurl);
  }
  
    getHobby(): Observable <Hobby[]>
  {
    return this.http.get<Hobby[]>(this.hobbiessurl);
  }

}
