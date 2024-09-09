import { Component } from '@angular/core';
import { ScrollerService } from '../../shared/service/scroller.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  constructor(private scrollerService: ScrollerService) { }


  scrollToContact() {
    this.scrollerService.scrollToAnchor('contact');
    this.scrollerService.scrollId = 'contact';
  }
}
