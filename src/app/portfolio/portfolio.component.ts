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

  programs = [
    {"id": 1001, "name": "Keep Clean","url":"https://keep-clean.web.app/", "update": "päivitetty: 17.4.2023", "detail": "Helsinki Business Collegen Demo Session kevät 2023 tehty webapp, joka on informaatiopeneeli yleisten wc -tilojen käyttäjille. Ohjelma antaa informaatiota viimeisestä siivouskerrasta. Käyttömuoto: Tabletti vaakatasossa. Ohjelmoitu Angularilla.","status":"valmis"},
    {"id": 1002, "name": "Citybike Helsinki","url":"https://solitacitybike.azurewebsites.net/mainpage", "update": "päivitetty: 9.3.2024", "detail": "Solitan citybike ohjelma, jossa mahdollisuutena katsoa asemia, matkoja, lisätä, poistaa ja muokata näitä. Tehty Solitan Devacademyn tehtävänannosta demoprojektina. Tietokantana taustalla Azure SQL, ohjelmoitu Angularilla ja C#:lla.","status":"valmis"},
    {"id": 1003, "name": "Blogs","url":"https://blogapp-2023.web.app/", "update": "päivitetty: 9.3.2024", "detail": "Blogi, jossa mahdollisuus kirjautua sisään ja kirjoittaa blogitekstiä. Teksti tallentuu tietokantaan ja näkyy kaikille käyttäjille. Oma sivu, johon voi tallentaa blogeja. Tietokantana taustalla Azure SQL, ohjelmoitu kokonaan Reactilla.","status":"valmis"},
    {"id": 1004, "name": "Helsinki Linked Events","url":"https://linkedevents.azurewebsites.net/mainpage", "update": "päivitetty: 9.3.2024", "detail": "Webpohjainen selain, joka hakee Helsingin kaupungin Linked Events rajapinnasta datan ohjelmaan. Ohjelmoitu Angularilla.","status":"valmis"},
    {"id": 1005, "name": "Phonemodel Store","url":"https://puhelinkauppa.web.app/", "update": "päivitetty: 5.4.2023", "detail": "Puhelinkauppa, jossa muutama puhelinmalli, mallien omat sivut, ostomahdollisuus ja ostoskori. Ohjelmoitu Angularilla.","status": "valmis"},
    {"id": 1006, "name": "Boatcaptain","url":"https://boatcaptain.web.app/", "update": "päivitetty: 15.2.2024", "detail": "Vesillä liikkujalle oivallinen työkalu, ohjelma hakee Traficomin tietokannasta veneiden tiedot ja meriradion numerot, lisäksi mahdollisuus katsoa majakoiden sijainnit ja signaalilippujen merkitykset. Ohjelmoitu Angularilla.","status":"kesken"},
    {"id": 1007, "name": "Product List","url":"https://json-product-catalog.web.app/products", "update": "päivitetty: 1.3.2023", "detail": "Tuotekuvasto, jossa on hakuominaisuuksia ja tietojen suodatus. Lisäksi voit katsoa yksittäisen tuotteen tarkemmat tiedot. Tehty koulun kurssilla oppimistehtävänä. Käytetyt datat on tallennettu ohjelmaan. Ohjelmoitu Angularilla.","status":"valmis"},
    {"id": 1008, "name": "Order Coffee","url":"https://kahvila.web.app", "update": "päivitetty: 15.3.2023", "detail": "Ohjelman pilkkominen osiin ja datan kuljettamista komponentista toiseen ohjelman sisällä. Tehty koulun kurssilla oppimistehtävänä ja lisätty hieman omia lisäyksiä. Ohjelmoitu Angularilla.","status":"valmis"},
    {"id": 1009, "name": "Pizzeria Pasila","url":"https://pizza-pasila.web.app/home", "update": "päivitetty: 9.3.2024", "detail": "FreeCodeCampin kautta verkkokaupan pohja, jossa tuotteet ja ostoskori. Ohjelmoitu Angularilla.","status":"valmis"},
  ]

  csharp = [
  ]

  sql = [{}]

}
