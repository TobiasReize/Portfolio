import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from '../shared/service/portfolio.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private portfolioService: PortfolioService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.checkCurrentPath();
  }


  checkCurrentPath() {
    let currentUrl = this.activatedRoute.snapshot.url;
    if (currentUrl.length > 0) {
      let currentPath = currentUrl[0].path;
      if (currentPath === 'imprint' || currentPath === 'privacy-policy') {
        this.portfolioService.homepage = false;
      }
    } else {
      this.portfolioService.homepage = true;
    }
  }


  home() {
    this.router.navigateByUrl('/');
  }


  scrollToTop() {
    this.portfolioService.scrollToAnchor('top');
    this.portfolioService.scrollId = 'top';
  }
}