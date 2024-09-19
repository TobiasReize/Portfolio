import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  currentReviewIndex = 0;

  testimonials = [
    {
      person: 'Person 1 - Team Partner',
      comment: '<reference 1>',
      image: ''
    },
    {
      person: 'Person 2 - Team Partner',
      comment: '<reference 2>',
      image: ''
    },
    {
      person: 'Person 3 - Team Partner',
      comment: '<reference 3>',
      image: ''
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