import { Component } from '@angular/core';
import { PortfolioService } from '../../shared/service/portfolio.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  constructor(private portfolioService: PortfolioService) { }


  scrollToContact() {
    this.portfolioService.scrollToAnchor('contact');
    this.portfolioService.scrollId = 'contact';
  }
}
