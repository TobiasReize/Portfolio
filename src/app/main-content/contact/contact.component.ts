import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  nameInputStatus: 'ok' | 'notok' | 'empty' = 'empty';
  emailInputStatus: 'ok' | 'notok' | 'empty' = 'empty';
  messsageInputStatus: 'ok' | 'notok' | 'empty' = 'empty';

  nameInput: string = '';
  emailInput: string = '';
  messageInput: string = '';

  agreedPrivacyPolicy: boolean | 'empty' = 'empty';
  btnDisabled = true;


  checkInput(id: string, inputData: string) {
    switch (id) {
      case 'name':
        if (inputData.length <= 3) {
          this.nameInputStatus = 'notok';
        } else {
          this.nameInputStatus = 'ok';
        }
        break;
      
      case 'email':
        if (inputData.length <= 3) {
          this.emailInputStatus = 'notok';
        } else {
          this.emailInputStatus = 'ok';
        }
        break;
    
      case 'message':
        if (inputData.length <= 3) {
          this.messsageInputStatus = 'notok';
        } else {
          this.messsageInputStatus = 'ok';
        }
        break;
    }
    this.checkButton();
  }


  setBorderStyle(status: string) {
    switch (status) {
      case 'ok':
        return {'border-color': '#70E61C'};

      case 'notok':
        return {'border-color': '#E61C40'};

      default:
        return {};
    }
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
    this.checkButton();
  }


  checkButton() {
    if (this.nameInputStatus === 'ok' && this.emailInputStatus === 'ok' && this.messsageInputStatus === 'ok' && this.agreedPrivacyPolicy === true) {
      this.btnDisabled = false;
    } else {
      this.btnDisabled = true;
    }
  }


  sendMessage() {
    if (this.agreedPrivacyPolicy === 'empty') {
      this.agreedPrivacyPolicy = false;
    } else if (!this.btnDisabled) {
      console.log('Message sent!');
      console.log('btnDisable:', this.btnDisabled);
    }
  }

  
}
