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
      title: 'Join',
      techstack: 'JavaScript | HTML | CSS | Firebase',
      description: 'project_description_join',
      image: 'join.png',
      linkTest: 'https://join.tobias-reize.de/',
      linkGithub: 'https://github.com/TobiasReize/Join-200.git'
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
      title: 'Next project...',
      techstack: '',
      description: 'project_description_crm',
      image: 'simple-crm.png',
      linkTest: '',
      linkGithub: ''
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
