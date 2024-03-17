import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
declare var $: any;

@Component({
  selector: 'app-etusivu',
  templateUrl: './etusivu.component.html',
  styleUrls: ['./etusivu.component.css'],
  animations: [
    trigger('fadeAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('1500ms', style({ opacity: 0 }))
      ])
    ])
  ]
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