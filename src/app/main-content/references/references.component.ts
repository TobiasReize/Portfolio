import { Component } from '@angular/core';
import { SingleReferenceComponent } from './single-reference/single-reference.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [SingleReferenceComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

}
