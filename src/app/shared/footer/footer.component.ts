import { Component } from '@angular/core';
import { ScrollerService } from '../service/scroller.service';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private scrollerService: ScrollerService, private router: Router) { }


  scrollToId(id: string) {
    this.scrollerService.scrollToAnchor(id);
    this.scrollerService.scrollId = id;
  }


  home() {
    this.router.navigateByUrl('/');
    // muss aber auch nach oben scrollen wenn man auf der Main-Seite ist!
  }


  showImprint() {
    this.scrollerService.scrollId = '';
    this.router.navigateByUrl('/imprint/');
  }
}