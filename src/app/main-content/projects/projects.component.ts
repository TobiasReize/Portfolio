import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { Project } from '../../shared/interface/project.interface';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Videoflix',
      techstack: 'Django | Angular | PostgreSQL | Redis',
      description: 'project_description_videoflix',
      image: 'videoflix.png',
      linkTest: 'https://videoflix.tobias-reize.de/',
      linkGithub: 'https://github.com/TobiasReize/videoflix_backend.git'
    },
    {
      title: 'Coderr',
      techstack: 'Django | Python | Google Cloud',
      description: 'project_description_coderr',
      image: 'coderr.png',
      linkTest: 'https://coderr.tobias-reize.de/',
      linkGithub: 'https://github.com/TobiasReize/coderr_backend.git'
    },
    {
      title: 'DA Bubble',
      techstack: 'Angular | TypeScript | Firebase',
      description: 'project_description_dabubble',
      image: 'da-bubble.png',
      linkTest: 'https://dabubble.tobias-reize.de/',
      linkGithub: 'https://github.com/TobiasReize/DABubble.git'
    },
    {
      title: 'El Pollo Loco',
      techstack: 'JavaScript | HTML | CSS',
      description: 'project_description_epl',
      image: 'el-pollo-loco.png',
      linkTest: 'https://epl.tobias-reize.de/',
      linkGithub: 'https://github.com/TobiasReize/El-Pollo-Loco.git'
    },
    {
      title: 'Join',
      techstack: 'Angular | TypeScript | Firebase',
      description: 'project_description_join',
      image: 'join-new.png',
      linkTest: 'https://join.tobias-reize.de/',
      linkGithub: 'https://github.com/TobiasReize/join_angular.git'
    }
  ];

  
  /**
   * Checks whether the number is odd or even and returns a boolean value.
   * @param number - index of the project.
   */
  isOdd(index: number):boolean {
    return (index % 2 != 0);
  }
}
