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

  constructor(public scrollerService: ScrollerService) { }


  scrollToId(id: string) {
    this.scrollerService.scrollToAnchor(id);
    this.scrollerService.scrollId = id;
  }
}