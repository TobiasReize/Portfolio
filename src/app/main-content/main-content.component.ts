import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, MySkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
