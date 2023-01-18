import { Injectable } from '@angular/core';
// HttpClient tarvitaan datan l�hett�miseen palvelimelle ja sen hakemiseen palvelimelta
import { HttpClient} from '@angular/common/http';
// Palvelimelta tuleva data toimitetaan komponentille Observablena eli reaktiivisesti
import { Observable } from 'rxjs';
// tietotyyppi
import { Mydata } from './dataclasses';
import { Hobby } from './dataclasses';
import { Study } from './dataclasses';


@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  
//valepalvelimen osoite, josta saadaan mydata, hobby jne.

	  mydataurl = 'api/mydatas';
    hobbiessurl = 'api/mydatashobby';
    studyurl = 'api/mydatasstudies'

// liitet��n injektori HttpService  - olio t�h�n luokkaan konsuktorin argumenttina (Depency injection)
  constructor(private http: HttpClient) { }

  // tehd��n pyynt� palvelimelle jolla haetaan tieto observablena
  getMydata(): Observable <Mydata[]>
  {
    return this.http.get<Mydata[]>(this.mydataurl);
  }

    getHobby(): Observable <Hobby[]>
  {
    return this.http.get<Hobby[]>(this.hobbiessurl);
  }

  getMyStudy(): Observable <Study[]>
  {
    return this.http.get<Study[]>(this.studyurl);
  }


}
