import { Component, OnInit } from '@angular/core';
import { Study } from '../dataclasses';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit { 
  
  mydatasstudies: Study[] = [];
  
  constructor(private hpservice: HomepageService) { }
  
  getMyStudy(): void {
    this.hpservice.getMyStudy().subscribe(mydatasstudies => this.mydatasstudies = mydatasstudies);
}

  ngOnInit(): void {
    this.getMyStudy();
  }

}
