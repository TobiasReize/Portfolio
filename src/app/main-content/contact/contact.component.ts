import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PortfolioService } from '../../shared/service/portfolio.service';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  agreedPrivacyPolicy: boolean | 'empty' = 'empty';
  mailSent: boolean = false;
  mailTest: boolean = true;
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

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

  constructor(private portfolioService: PortfolioService, private router: Router) { }


  scrollToTop() {
    this.portfolioService.scrollToAnchor('top');
    this.portfolioService.scrollId = 'top';
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


  showPrivacyPolicy() {
    this.portfolioService.scrollId = '';
    this.router.navigateByUrl('/privacy-policy/');
  }


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // Hier die Logik für das erfolgreiche Absenden! (--> Daten/ Message als Email senden?!)
            console.log('Nachricht wurde gesendet!:', this.contactData);
            console.log('Response:', response);
            this.resetContactForm(ngForm);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {  // Test-Bereich!
      console.log('Test-Nachricht wurde gesendet!:', this.contactData);
      this.resetContactForm(ngForm);
    }
  }


  resetContactForm(ngForm: NgForm) {
    ngForm.resetForm();
    this.agreedPrivacyPolicy = 'empty';
    this.mailSent = true;
    setTimeout(() => {
      this.mailSent = false;
    }, 3000);
  }
}