import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';
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

  constructor(public portfolioService: PortfolioService, private translate: TranslateService) { }


  /**
   * Scrolls to the corresponding id and closes the burger menu overlay for mobiles.
   * @param id - id of the section.
   */
  scrollToId(id: string) {
    this.portfolioService.scrollToAnchor(id);
    this.portfolioService.scrollId = id;
    this.burgerMenu = false;
    document.body.style.overflow = 'unset'
  }


  /**
   * Translates the text.
   * @param lang - de for german or en for english.
   */
  useLanguage(lang: string) {
    this.translate.use(lang);
    this.burgerMenu = false;
    document.body.style.overflow = 'unset'
  }


  /**
   * Shows the burger menu overlay for mobiles and prevents body from scrolling.
   */
  showBurgerMenuOverlay() {
    this.burgerMenu = !this.burgerMenu;
    if (this.burgerMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }
}