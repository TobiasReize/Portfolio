import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { Project } from '../../shared/interface/project.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Join',
      techstack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: 'join.png',
      linkTest: 'test.de',
      linkGithub: 'test@github.de'
    },
    {
      title: 'El Pollo Loco',
      techstack: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: 'el-pollo-loco.png',
      linkTest: 'test.de',
      linkGithub: 'test@github.de'
    },
    {
      title: 'Simple CRM',
      techstack: 'Angular | Firebase',
      description: 'A very simple Customer Relationship Management system working with CRUD functionality.',
      image: 'simple-crm.png',
      linkTest: 'test.de',
      linkGithub: 'test@github.de'
    },
    {
      title: 'Pokédex',
      techstack: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: 'pokedex.png',
      linkTest: 'test.de',
      linkGithub: 'test@github.de'
    },
    {
      title: 'DA Bubble',
      techstack: 'Angular | TypeScript | Firebase',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      image: 'da-bubble.png',
      linkTest: 'test.de',
      linkGithub: 'test@github.de'
    }
  ];

  isOdd(index: number):boolean {
    return (index % 2 != 0);
  }
}
