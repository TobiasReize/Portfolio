import { Component } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private portfolioService: PortfolioService, private router: Router) { }


  scrollToId(id: string) {
    this.portfolioService.scrollToAnchor(id);
    this.portfolioService.scrollId = id;
  }


  // home() {
  //   this.router.navigateByUrl('/');
  //   // muss aber auch nach oben scrollen wenn man auf der Main-Seite ist!
  // }


  showImprint() {
    this.portfolioService.scrollId = '';
    this.router.navigateByUrl('/imprint/');
  }
}