import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollerService } from '../service/scroller.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  id: string = '';

  constructor(private scrollerService: ScrollerService) { }


  scrollToId(id: string) {
    this.scrollerService.scrollToAnchor(id);
    this.id = id;
  }
}
