import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  burgerMenu: boolean = false;

  constructor(public scrollerService: ScrollerService, private translate: TranslateService) { }


  scrollToId(id: string) {
    this.scrollerService.scrollToAnchor(id);
    this.scrollerService.scrollId = id;
    this.burgerMenu = false;
    document.body.style.overflow = 'unset'
  }


  useLanguage(lang: string) {
    this.translate.use(lang);
    this.burgerMenu = false;
    document.body.style.overflow = 'unset'
  }


  showBurgerMenu() {
    this.burgerMenu = !this.burgerMenu;
    if (this.burgerMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }
}