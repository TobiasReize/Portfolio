import { Component } from '@angular/core';
import { ScrollerService } from '../../shared/service/scroller.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  constructor(private scrollerService: ScrollerService) { }


  scrollToContact() {
    this.scrollerService.scrollToAnchor('contact');
  }
}
