import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.filterPrograms();
  }

  programs = [
    {"id": 1001, "name": "Keep Clean", "url":"https://keep-clean.web.app/", "update": "17.04.2024", "detail": "Helsinki Business Collegen Demo Session kevät 2023 tehty webapp, joka on informaatiopeneeli yleisten wc -tilojen käyttäjille. Ohjelma antaa informaatiota viimeisestä siivouskerrasta. Käyttömuoto: Tabletti vaakatasossa. Ohjelmoitu Angularilla.","status":"valmis", "image": "../../assets/images/IMG-001.WEBP"},
    {"id": 1002, "name": "Citybike Helsinki", "url":"https://solitacitybike.azurewebsites.net", "update": "14.1.2025", "detail": "Solitan citybike ohjelma, jossa mahdollisuutena katsoa asemia, matkoja, lisätä, poistaa ja muokata näitä. Tehty Solitan Devacademyn tehtävänannosta demoprojektina. Tietokantana taustalla Azure SQL, ohjelmoitu Angularilla ja C#:lla.","status":"valmis", "image": "../../assets/images/CITYBIKE.WEBP"},
    {"id": 1003, "name": "Blogs", "url":"https://blogapp2024.onrender.com/", "update": "09.12.2024", "detail": "Blogi, jossa mahdollisuus kirjautua sisään ja kirjoittaa blogitekstiä. Teksti tallentuu tietokantaan ja näkyy kaikille käyttäjille. Oma sivu, johon voi tallentaa blogeja. Tietokantana taustalla Azure SQL, ohjelmoitu kokonaan Reactilla.","status":"valmis", "image": "../../assets/images/BLOGS.WEBP"},
    {"id": 1004, "name": "Helsinki Linked Events", "url":"https://linkedevents.azurewebsites.net", "update": "04.02.2025", "detail": "Webpohjainen selain, joka hakee Helsingin kaupungin Linked Events rajapinnasta datan ohjelmaan. Ohjelmoitu Angularilla.","status":"valmis", "image": "../../assets/images/HELSINKI.jpeg"},
    {"id": 1005, "name": "Phonemodel Store", "url":"https://puhelinkauppa.web.app", "update": "25.03.2025", "detail": "Puhelinkauppa, jossa muutama puhelinmalli, mallien omat sivut, ostomahdollisuus ja ostoskori. Ohjelmoitu Angularilla.","status":"valmis", "image": "../../assets/images/IMG-005.WEBP"},
    {"id": 1006, "name": "Boatcaptain", "url":"https://boatcaptain.web.app", "update": "15.02.2024", "detail": "Vesillä liikkujalle oivallinen työkalu, ohjelma hakee Traficomin tietokannasta veneiden tiedot ja meriradion numerot, lisäksi mahdollisuus katsoa majakoiden sijainnit ja signaalilippujen merkitykset. Ohjelmoitu Angularilla.","status":"kesken", "image": "../../assets/images/IMG-001.WEBP"},
    {"id": 1007, "name": "Product List", "url":"https://json-product-catalog.web.app/products", "update": "01.03.2023", "detail": "Tuotekuvasto, jossa on hakuominaisuuksia ja tietojen suodatus. Lisäksi voit katsoa yksittäisen tuotteen tarkemmat tiedot. Tehty koulun kurssilla oppimistehtävänä. Käytetyt datat on tallennettu ohjelmaan. Ohjelmoitu Angularilla.","status":"valmis", "image": "../../assets/images/IMG-002.WEBP"},
    {"id": 1008, "name": "Order Coffee", "url":"https://kahvila.web.app", "update": "15.03.2023", "detail": "Ohjelman pilkkominen osiin ja datan kuljettamista komponentista toiseen ohjelman sisällä. Tehty koulun kurssilla oppimistehtävänä ja lisätty hieman omia lisäyksiä. Ohjelmoitu Angularilla.","status":"valmis", "image": "../../assets/images/IMG-003.WEBP"},
    {"id": 1009, "name": "Pizzeria Pasila", "url":"https://pasilapizza.web.app", "update": "09.03.2025", "detail": "FreeCodeCampin kautta verkkokaupan pohja, jossa tuotte ja ostoskori. Ohjelmoitu Angularilla.","status":"valmis", "image": "../../assets/images/IMG-004.WEBP"},
    {"id": 1010, "name": "Ulkopelit", "url":"https://ulkopelit.fi", "update": "01.03.2025", "detail": "Reactilla ja Vitellä ohjelmoitu webapp, jossa pelaaja voi ilmoittautua ulkopeleihin.","status":"valmis", "image": "../../assets/images/ULKOPELIT.WEBP"},

  ];

  filteredPrograms = [...this.programs];
  searchText = '';
  selectedLanguage = '';

  parseDate(dateString: string): Date {
    const [day, month, year] = dateString.split('.').map(Number);
    return new Date(year, month - 1, day);
  }

  sortPrograms(order: string): void {
    this.filteredPrograms.sort((a, b) => {
      const dateA = this.parseDate(a.update);
      const dateB = this.parseDate(b.update);
      return order === 'new' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
    });
  }

  filterPrograms(): void {
    this.filteredPrograms = this.programs.filter(program => {
      const matchesText = program.name.toLowerCase().includes(this.searchText.toLowerCase()) || 
                          program.detail.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesLanguage = this.selectedLanguage ? program.detail.toLowerCase().includes(this.selectedLanguage.toLowerCase()) : true;
      return matchesText && matchesLanguage;
    });
  }

  onSearchTextChange(): void {
    this.filterPrograms();
  }

  onLanguageChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedLanguage = target.value;
    this.filterPrograms();
  }
}