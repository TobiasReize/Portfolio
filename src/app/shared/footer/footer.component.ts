import { Component } from '@angular/core';
import { ScrollerService } from '../service/scroller.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private scrollerService: ScrollerService) { }


  scrollToTop() {
    this.scrollerService.scrollToAnchor('top');
  }
}