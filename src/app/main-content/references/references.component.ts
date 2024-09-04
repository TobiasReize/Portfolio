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
      person: 'V. Schuster - Team Partner',
      comment: 'Michael really kept the team together with his great organization and clear communication. We wouldn\'t have got this far without his commitment.',
      image: 'person1.png'
    },
    {
      person: 'E.Eichinger - Team Partner',
      comment: 'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
      image: 'person2.png'
    },
    {
      person: 'I.Nuber - Frontend Engineer',
      comment: 'It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.',
      image: 'person3.png'
    }
  ];


  nextTestimonial() {
    if ((this.currentReviewIndex + 1) >= this.testimonials.length) {
      this.currentReviewIndex = 0;
    } else {
      this.currentReviewIndex++;
    }
  }


  previousTestimonial() {
    if ((this.currentReviewIndex - 1) < 0) {
      this.currentReviewIndex = this.testimonials.length - 1;
    } else {
      this.currentReviewIndex--;
    }
  }
}