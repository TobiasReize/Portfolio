import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollerService } from '../shared/service/scroller.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, MySkillsComponent, ProjectsComponent, ReferencesComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit {


  constructor(public scrollerService: ScrollerService, private activatedRoute: ActivatedRoute) { }


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
}