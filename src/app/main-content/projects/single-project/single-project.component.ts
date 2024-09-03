import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/interface/project.interface';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {

  @Input() singleProject!: Project;
}
