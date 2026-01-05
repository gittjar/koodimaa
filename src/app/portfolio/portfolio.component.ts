import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

interface Project {
  id: number;
  name: string;
  url: string;
  update: string;
  detail: string;
  status: string;
  image: string;
  githubRepo?: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.loadGitHubDates();
    this.filterPrograms();
  }

  programs: Project[] = [
    {"id": 1001, "name": "Keep Clean", "url":"https://keep-clean.web.app/", "update": "", "detail": "Helsinki Business Collegen Demo Session kevät 2023 tehty webapp, joka on informaatiopeneeli yleisten wc -tilojen käyttäjille. Ohjelma antaa informaatiota viimeisestä siivouskerrasta. Käyttömuoto: Tabletti vaakatasossa. Ohjelmoitu Angularilla.","status":"kesken", "image": "../../assets/images/IMG-001.WEBP", "githubRepo": "keep-clean-app"},
    {"id": 1002, "name": "Citybike Helsinki", "url":"https://solitacitybike.azurewebsites.net", "update": "", "detail": "Solitan citybike ohjelma, jossa mahdollisuutena katsoa asemia, matkoja, lisätä, poistaa ja muokata näitä. Tehty Solitan Devacademyn tehtävänannosta demoprojektina. Tietokantana taustalla Azure SQL, ohjelmoitu Angularilla ja C#:lla.","status":"valmis", "image": "../../assets/images/CITYBIKE.WEBP", "githubRepo": "CitybikeFrontend"},
    {"id": 1003, "name": "Blogs", "url":"https://blogapp2024.onrender.com/", "update": "", "detail": "Blogi, jossa mahdollisuus kirjautua sisään ja kirjoittaa blogitekstiä. Teksti tallentuu tietokantaan ja näkyy kaikille käyttäjille. Oma sivu, johon voi tallentaa blogeja. Tietokantana taustalla Azure SQL, ohjelmoitu kokonaan Reactilla.","status":"valmis", "image": "../../assets/images/BLOGS.WEBP", "githubRepo": "blogapp"},
    {"id": 1004, "name": "Helsinki Linked Events", "url":"https://helsinki.web.app/mainpage", "update": "", "detail": "Webpohjainen selain, joka hakee Helsingin kaupungin Linked Events rajapinnasta datan ohjelmaan. Ohjelmoitu Angularilla.","status":"valmis", "image": "../../assets/images/HELSINKI.jpeg", "githubRepo": "helsinki-linkedevents-app"},
    {"id": 1005, "name": "Phonemodel Store", "url":"https://puhelinkauppa.web.app", "update": "", "detail": "Puhelinkauppa, jossa muutama puhelinmalli, mallien omat sivut, ostomahdollisuus ja ostoskori. Ohjelmoitu Angularilla.","status":"valmis", "image": "../../assets/images/IMG-005.WEBP", "githubRepo": "phone-model-store"},
    {"id": 1006, "name": "Boatcaptain", "url":"https://boatcaptain.web.app", "update": "", "detail": "Vesillä liikkujalle oivallinen työkalu, ohjelma hakee Traficomin tietokannasta veneiden tiedot ja meriradion numerot, lisäksi mahdollisuus katsoa majakoiden sijainnit ja signaalilippujen merkitykset. Ohjelmoitu Angularilla.","status":"kesken", "image": "../../assets/images/IMG-001.WEBP", "githubRepo": "meriradionumerot"},
    {"id": 1007, "name": "ProductAPI", "url":"https://productapi-frontend-7ogm.onrender.com", "update": "", "detail": "REST API tuotekatalogille, joka mahdollistaa tuotteiden hakemisen, lisäämisen, päivittämisen ja poistamisen. API on toteutettu Pythonilla ja TypeScriptillä ja käyttää MongoDB -tietokantaa.","status":"valmis", "image": "../../assets/images/IMG-002.WEBP", "githubRepo": "ProductAPI"},
    {"id": 1008, "name": "Solita Citybike API", "url":"https://solitacitybikeapi.azurewebsites.net/", "update": "", "detail": "RESTful API Helsingin ja Espoon kaupunkipyöräasemille ja -matkoille. API tarjoaa päätepisteet asemien ja matkojen hakemiseen, suodattamiseen ja tilastojen tarkasteluun. Toteutettu C#:lla ja käyttää Azure SQL -tietokantaa.","status":"valmis", "image": "../../assets/images/CITYBIKE.WEBP", "githubRepo": "SolitaCitybikeApi"},
    {"id": 1009, "name": "Ulkopelit", "url":"https://ulkopelit.onrender.com", "update": "", "detail": "Reactilla ja Vitellä ohjelmoitu webapp, jossa pelaaja voi ilmoittautua ulkopeleihin.","status":"valmis", "image": "../../assets/images/ULKOPELIT.WEBP", "githubRepo": "Ulkopelit"},
  ];

  filteredPrograms = [...this.programs];
  searchText = '';
  selectedLanguage = '';
  isLoadingDates = true;

  get latestUpdateDate(): string {
    if (this.isLoadingDates) return 'Ladataan...';
    if (this.programs.length === 0) return '';
    
    const validDates = this.programs
      .filter(p => p.update && p.update.trim() !== '')
      .map(p => this.parseDate(p.update));
    
    if (validDates.length === 0) return 'Ladataan...';
    
    const latestDate = new Date(Math.max(...validDates.map(d => d.getTime())));
    const day = String(latestDate.getDate()).padStart(2, '0');
    const month = String(latestDate.getMonth() + 1).padStart(2, '0');
    const year = latestDate.getFullYear();
    return `${day}.${month}.${year}`;
  }

  loadGitHubDates(): void {
    const reposToUpdate = this.programs
      .filter(p => p.githubRepo)
      .map(p => p.githubRepo!);

    if (reposToUpdate.length === 0) {
      this.isLoadingDates = false;
      return;
    }

    this.githubService.getMultipleRepositories(reposToUpdate).subscribe({
      next: (repos) => {
        repos.forEach((repo, index) => {
          if (repo && repo.updated_at) {
            const program = this.programs.find(p => p.githubRepo === reposToUpdate[index]);
            if (program) {
              program.update = this.githubService.formatDate(repo.updated_at);
            }
          }
        });
        this.isLoadingDates = false;
        // Automatically sort by newest first after loading GitHub dates
        this.sortPrograms('new');
      },
      error: (error) => {
        console.error('Error loading GitHub dates:', error);
        this.isLoadingDates = false;
      }
    });
  }

  parseDate(dateString: string): Date {
    if (!dateString || dateString.trim() === '') {
      return new Date(0); // Return epoch date for empty strings
    }
    const [day, month, year] = dateString.split('.').map(Number);
    return new Date(year, month - 1, day);
  }

  sortPrograms(order: string): void {
    this.filteredPrograms.sort((a, b) => {
      // Handle empty dates by putting them at the end
      if (!a.update || a.update.trim() === '') return 1;
      if (!b.update || b.update.trim() === '') return -1;
      
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