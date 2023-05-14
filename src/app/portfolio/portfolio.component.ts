import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  angulars = [
    {"id": 1001, "name": "Keep Clean", "update": "17.4.2023", "detail": "Helsinki Business Collegen Demo Session kevät 2023 tehty webapp, joka on informaatiopeneeli yleisten wc -tilojen käyttäjille. Ohjelma antaa informaatiota viimeisestä siivouskerrasta. Käyttömuoto: Tabletti vaakatasossa.","status":"ready"},
    {"id": 1002, "name": "Phonemodel store", "update": "5.4.2023", "detail": "Kirkuvan oranssi puhelinkauppa, jossa muutama puhelinmalli, mallien omat sivut, ostomahdollisuus ja ostoskori. Tehty harjoitustyönä koulutehtävänä.","status": "ready"},
    {"id": 1003, "name": "Aika ja sää", "update": "19.4.2023", "detail": "Ohjelma näyttää ajan, päivän ja vuoden. Lisäksi ohjelma hakee tietokannasta säätiedot, ennusteen ja säävaroitukset Helsingille. Käyttäjä voi hakea myös säätietoja kirjoittamalla paikan nimen. Kohteen värit on valittu räikeiksi ja erikoisiksi tarkoituksella.","status":"ready"}
  ]

}
