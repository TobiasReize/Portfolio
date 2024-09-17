import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private portfolioService: PortfolioService, private router: Router, private activatedRoute: ActivatedRoute) { }


  scrollToId(id: string) {
    this.portfolioService.scrollToAnchor(id);
    this.portfolioService.scrollId = id;
  }


  showImprint() {
    this.portfolioService.scrollId = '';
    this.router.navigateByUrl('imprint');
  }
}