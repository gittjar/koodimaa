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
    {"id": 1001, "name": "Keep Clean","url":"https://keep-clean.web.app/", "update": "päivitetty: 17.4.2023", "detail": "Helsinki Business Collegen Demo Session kevät 2023 tehty webapp, joka on informaatiopeneeli yleisten wc -tilojen käyttäjille. Ohjelma antaa informaatiota viimeisestä siivouskerrasta. Käyttömuoto: Tabletti vaakatasossa.","status":"valmis"},
    {"id": 1002, "name": "Phonemodel store","url":"https://puhelinkauppa.web.app/", "update": "päivitetty: 5.4.2023", "detail": "Kirkuvan oranssi puhelinkauppa, jossa muutama puhelinmalli, mallien omat sivut, ostomahdollisuus ja ostoskori. Tehty harjoitustyönä koulutehtävänä.","status": "valmis"},
    {"id": 1003, "name": "Aika ja sää","url":"https://aika.web.app/", "update": "päivitetty: 19.4.2023", "detail": "Ohjelma näyttää ajan, päivän ja vuoden. Lisäksi ohjelma hakee tietokannasta säätiedot, ennusteen ja säävaroitukset Helsingille. Käyttäjä voi hakea myös säätietoja kirjoittamalla paikan nimen. Kohteen värit on valittu räikeiksi ja erikoisiksi tarkoituksella.","status":"valmis"},
    {"id": 1004, "name": "Boatcaptain","url":"https://boatcaptain.web.app/", "update": "päivitetty: 30.4.2023", "detail": "Vesillä liikkujalle oivallinen työkalu, ohjelma hakee Traficomin tietokannasta veneiden tiedot ja meriradion numerot, lisäksi mahdollisuus katsoa majakoiden sijainnit ja signaalilippujen merkitykset.","status":"kesken"},
    {"id": 1005, "name": "Tuoteluettelo","url":"https://json-product-catalog.web.app/products", "update": "päivitetty: 1.3.2023", "detail": "Tuotekuvasto, jossa on hakuominaisuuksia ja tietojen suodatus. Lisäksi voit katsoa yksittäisen tuotteen tarkemmat tiedot. Tehty koulun kurssilla oppimistehtävänä. Käytetyt datat on tallennettu ohjelmaan.","status":"valmis"},
    {"id": 1006, "name": "Kahvila","url":"https://kahvila.web.app", "update": "päivitetty: 15.3.2023", "detail": "Ohjelman pilkkominen osiin ja datan kuljettamista komponentista toiseen ohjelman sisällä. Tehty koulun kurssilla oppimistehtävänä ja lisätty hieman omia lisäyksiä.","status":"valmis"}
  ]

  csharp = [
    {"id": 2001, "name": "Movie MVC","url":"https://github.com/gittjar/MovieAppAzure", "update": "päivitetty: 26.4.2023", "detail": "Ohjelma tallentaa Azure SQL palvelimelle annetut tiedot (CRUD). Azure SQL palvelimeen otetaan yhteys rajapinnalla ja rajapintaa voi lukea esim Asp.NET, Angularilla tai vastaavalla frontendillä. Julkaistu käyttäen Azure pipelines","status":"valmis"},
    {"id": 2002, "name": "Moviestore","url":"https://github.com/gittjar/CallWebapiMoviestore", "update": "päivitetty: 15.4.2023", "detail": "Ohjelma lukee ylläolevan MVC Movien rajapinnasta dataa ja antaa ns. käyttäjänäkymän erikseen määritetyistä kentistä. Voit testata toimintaa lisäämällä/poistamalla MVC Movies -ohjelmaan dataa. Julkaistu käyttäen Azure pipelines.","status":"valmis"},
    {"id": 2003, "name": "Get Movie Tickets", "url":"https://github.com/gittjar/GetMovieTickets", "update":"päivitetty 1.5.2023", "detail": "Konsoliohjelma C# johon käyttäjä voi lisätä käyttäjiä ja poistaa. Lisäksi 3 eri elokuvaa joihin mahdollisuus ostaa paikkoja elokuvateatterista. Ohjelma tallentaa tiedot SQLitellä tietokantaan.", "status":"valmis"},
    {"id": 2004, "name": "Rent Index Calculator", "url":"https://github.com/gittjar/RentIndexCheck", "update":"päivitetty 6.2.2023", "detail": "Konsoliohjelma C#, tarkista indeksikortus vuokraasi helposti tällä ohjelmalla. Kielipaketti ENG tekeillä.", "status":"kesken"},
    {"id": 2005, "name": "BiisiGeneraattori", "url":"https://github.com/gittjar/BiisiGeneraattori", "update":"päivitetty 7.2.2023", "detail": "Konsoliohjelma C#, jossa integroituna CSV lukija, lisää, poista ja etsi biisejä, myös satunnaisia kappaleita. Ohjelma näyttää kappaleet ja linkin YouTubeen. Ohjelmalla on myös mahdollisuus lähettää sähköposteja.", "status":"valmis"},
    {"id": 2006, "name": "C# Perusteet (MOOC)", "url":"../assets/images/MOOC-93percent.jpg","update":"päivitetty 17.2.2023","detail":"Verkkokurssi C# perusteet yht. 6 osiota, suoritettu 93% -> arvosteluna saatu kiitettävä.", "status":"valmis"},
  ]

  sql = [{}]

}
