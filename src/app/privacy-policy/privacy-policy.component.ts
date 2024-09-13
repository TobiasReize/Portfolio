import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollerService } from '../shared/service/scroller.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private scrollerService: ScrollerService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.checkCurrentPath();
  }


  checkCurrentPath() {
    let currentUrl = this.activatedRoute.snapshot.url;
    if (currentUrl.length > 0) {
      let currentPath = currentUrl[0].path;
      if (currentPath === 'imprint' || currentPath === 'privacy-policy') {
        this.scrollerService.homepage = false;
      }
    } else {
      this.scrollerService.homepage = true;
    }
  }


  home() {
    this.router.navigateByUrl('/');
  }


  scrollToTop() {
    this.scrollerService.scrollToAnchor('top');
    this.scrollerService.scrollId = 'top';
  }
}