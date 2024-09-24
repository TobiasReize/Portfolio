import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  currentReviewIndex = 0;

  testimonials = [
    {
      person: 'Patrick N. - Team Partner',
      comment: 'reference_patrick',
      image: 'patrick-nigrin.jpeg'
    },
    {
      person: 'David K. - Team Partner',
      comment: 'reference_david',
      image: 'david-kolosza.jpg'
    }
  ];


  /**
   * Switches to the next testimonial.
   */
  nextTestimonial() {
    if ((this.currentReviewIndex + 1) >= this.testimonials.length) {
      this.currentReviewIndex = 0;
    } else {
      this.currentReviewIndex++;
    }
  }


  /**
   * Switches to the previous testimonial.
   */
  previousTestimonial() {
    if ((this.currentReviewIndex - 1) < 0) {
      this.currentReviewIndex = this.testimonials.length - 1;
    } else {
      this.currentReviewIndex--;
    }
  }
}