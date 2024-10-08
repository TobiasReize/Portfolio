import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioService } from '../shared/service/portfolio.service';
import { ActivatedRoute } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, WelcomeScreenComponent, HeroComponent, AboutMeComponent, MySkillsComponent, ProjectsComponent, ReferencesComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit {

  welcomeFinished = false;


  constructor(public portfolioService: PortfolioService, private activatedRoute: ActivatedRoute) { }


  /**
   * Calls the checkCurrentPath function and initialize the animation-on-scroll options.
   */
  ngOnInit(): void {
    this.checkCurrentPath();

    AOS.init({
      duration: 750,
      delay: 150,
      offset: 250,
      once: true,
    });
  }


  /**
   * Checks the current path to toggle a service variable to display the navbar.
   */
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


  /**
   * Sets the welcomeFinished variable to true.
   * @param event - boolean value
   */
  setWelcomeVariable(event: boolean) {
    this.welcomeFinished = event;
  }


}