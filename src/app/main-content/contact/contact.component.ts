import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ScrollerService } from '../../shared/service/scroller.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  agreedPrivacyPolicy: boolean | 'empty' = 'empty';
  mailTest = true;
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private scrollerService: ScrollerService) { }


  scrollToTop() {
    this.scrollerService.scrollToAnchor('top');
  }
  

  toggleCheckbox() {
    switch (this.agreedPrivacyPolicy) {
      case 'empty':
        this.agreedPrivacyPolicy = true;
        break;

      case false:
        this.agreedPrivacyPolicy = true;
        break;
    
      case true:
        this.agreedPrivacyPolicy = false;
        break;
    }
  }


  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // Hier die Logik für das erfolgreiche Absenden! (--> Daten/ Message als Email senden?!)
            console.log('Nachricht wurde gesendet!:', this.contactData);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {  // Test-Bereich!
      console.log('Test-Nachricht wurde gesendet!:', this.contactData);
      ngForm.resetForm();
    }
  }
  

}