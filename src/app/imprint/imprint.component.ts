import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(private router: Router) { }


  home() {
    this.router.navigateByUrl('/');
  }
}