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


  // ngOnInit(): void {
  //   this.checkCurrentPath();
  // }


  // checkCurrentPath() {
  //   let currentUrl = this.activatedRoute.snapshot.url;
  //   if (currentUrl.length > 0) {
  //     let currentPath = currentUrl[0].path;
  //     if (currentPath === 'imprint' || currentPath === 'privacy-policy') {
  //       console.log('Not Homepage:', currentPath);
  //     }
  //   } else {
  //     console.log('Homepage');
      
  //   }
  // }


  scrollToId(id: string) {
    this.portfolioService.scrollToAnchor(id);
    this.portfolioService.scrollId = id;
  }


  // goToContact() {
  //   this.router.navigateByUrl('/');
  //   this.portfolioService.scrollId = 'contact';
  // }


  showImprint() {
    this.portfolioService.scrollId = '';
    this.router.navigateByUrl('imprint');
  }
}