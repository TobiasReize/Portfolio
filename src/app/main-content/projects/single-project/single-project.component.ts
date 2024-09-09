import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/interface/project.interface';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {

  @Input() singleProject!: Project;
  @Input() index!: number;

  isOdd(number: number):boolean {
    return (number % 2 != 0);
  }
}
