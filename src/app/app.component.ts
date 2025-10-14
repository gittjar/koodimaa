import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'pääotsikko jos asettaa';
  extrainfo = 'Footer here! 2023';
  currentYear = new Date().getFullYear();
}
