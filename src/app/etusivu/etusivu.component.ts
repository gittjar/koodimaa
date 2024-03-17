import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-etusivu',
  templateUrl: './etusivu.component.html',
  styleUrls: ['./etusivu.component.css']
})
export class EtusivuComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit(): void {
    $('#carouselExampleCaptions').carousel({
      interval: 5000,
      ride: true
    });
  }

}