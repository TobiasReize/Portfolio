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
      techstack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'project_description_join',
      image: 'join.png',
      linkTest: '#',
      linkGithub: '#'
    },
    {
      title: 'El Pollo Loco',
      techstack: 'JavaScript | HTML | CSS',
      description: 'project_description_epl',
      image: 'el-pollo-loco.png',
      linkTest: '#',
      linkGithub: '#'
    },
    {
      title: 'Simple CRM',
      techstack: 'Angular | Firebase',
      description: 'project_description_crm',
      image: 'simple-crm.png',
      linkTest: '#',
      linkGithub: '#'
    }
  ];

  isOdd(index: number):boolean {
    return (index % 2 != 0);
  }
}
