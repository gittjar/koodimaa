import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
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
    
    // Initial check for elements in viewport
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('show');
      }
    });
  }
}