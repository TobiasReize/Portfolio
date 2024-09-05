import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnChanges {

  nameInputStatus: 'ok' | 'notok' | 'empty' = 'empty';
  emailInputStatus: 'ok' | 'notok' | 'empty' = 'empty';
  messsageInputStatus: 'ok' | 'notok' | 'empty' = 'empty';

  nameInput: string = '';
  emailInput: string = '';
  messageInput: string = '';

  agreedPrivacyPolicy = false;
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
    this.agreedPrivacyPolicy = !this.agreedPrivacyPolicy;    
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.nameInputStatus === 'ok' && this.emailInputStatus === 'ok' && this.messsageInputStatus === 'ok' && this.agreedPrivacyPolicy) {
      this.btnDisabled = false;
      console.log('btnDisabled = ', this.btnDisabled);
    } else {
      this.btnDisabled = true;
      console.log('btnDisabled = ', this.btnDisabled);
    }
  }


//   checkButton() {
//     if (this.nameInputStatus === 'ok' && this.emailInputStatus === 'ok' && this.messsageInputStatus === 'ok' && this.agreedPrivacyPolicy) {
//       this.btnDisabled = false;
//     } else {
//       this.btnDisabled = true;
//     }
//   }
}
