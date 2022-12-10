import { Component, OnInit } from '@angular/core';
import { Hobby } from '../dataclasses';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  mydatashobby: Hobby[] = [];

  constructor(private hpservice: HomepageService) { }
  
  getHobby(): void {
    this.hpservice.getHobby().subscribe(mydatashobby => this.mydatashobby = mydatashobby);
}

  ngOnInit(): void {
    this.getHobby();
  }

}