import { Component } from '@angular/core';
import { ScrollerService } from '../service/scroller.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private scrollerService: ScrollerService) { }


  scrollToId(id: string) {
    this.scrollerService.scrollToAnchor(id);
    this.scrollerService.scrollId = id;
  }
}