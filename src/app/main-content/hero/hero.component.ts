import { Component } from '@angular/core';
import { PortfolioService } from '../../shared/service/portfolio.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  constructor(private portfolioService: PortfolioService) { }


  scrollToContact() {
    this.portfolioService.scrollToAnchor('contact');
    this.portfolioService.scrollId = 'contact';
  }
}
