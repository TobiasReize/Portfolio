import { Component } from '@angular/core';
import { ScrollerService } from '../../shared/service/scroller.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  constructor(private scrollerService: ScrollerService) { }


  scrollToContact() {
    this.scrollerService.scrollToAnchor('contact');
    this.scrollerService.scrollId = 'contact';
  }
}
