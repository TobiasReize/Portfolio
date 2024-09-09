import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollerService } from '../service/scroller.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public scrollerService: ScrollerService, private translate: TranslateService) { }


  scrollToId(id: string) {
    this.scrollerService.scrollToAnchor(id);
    this.scrollerService.scrollId = id;
  }


  useLanguage(lang: string) {
    this.translate.use(lang);
  }
}