import { Component, OnInit } from '@angular/core';
import { Mydata } from '../dataclasses';
import { HomepageService } from '../homepage.service';
import { content } from './content';


@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit { 
  
  content = content;
  mydatas: Mydata[] = [];
  constructor(private hpservice: HomepageService) { }
  
  getMydata(): void {
    this.hpservice.getMydata().subscribe(mydatas => this.mydatas = mydatas);
}

  ngOnInit(): void {
    this.getMydata();
  }

}

