import { Injectable } from '@angular/core';
// HttpClient tarvitaan datan l�hett�miseen palvelimelle ja sen hakemiseen palvelimelta
import { HttpClient} from '@angular/common/http';
// Palvelimelta tuleva data toimitetaan komponentille Observablena eli reaktiivisesti
import { Observable } from 'rxjs';
// tietotyyppi
import { Mydata } from './dataclasses';



@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  
//valepalvelimen osoite, josta saadaan mydata, hobby jne.

	  mydataurl = 'api/mydatas';


// liitetään injektori HttpService  - olio t�h�n luokkaan konsuktorin argumenttina (Depency injection)
  constructor(private http: HttpClient) { }

  // tehdään pyyntö palvelimelle jolla haetaan tieto observablena
  getMydata(): Observable <Mydata[]>
  {
    return this.http.get<Mydata[]>(this.mydataurl);
  }




}
