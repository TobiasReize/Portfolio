import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollerService } from '../shared/service/scroller.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private scrollerService: ScrollerService) { }


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
}