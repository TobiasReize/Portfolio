import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PortfolioService } from '../../shared/service/portfolio.service';

@Component({
  selector: 'app-welcome-screen',
  standalone: true,
  imports: [],
  templateUrl: './welcome-screen.component.html',
  styleUrl: './welcome-screen.component.scss'
})
export class WelcomeScreenComponent implements OnInit {

  text: string = 'Welcome to my site!'
  textArray: string[] = [];
  counter: number = 0;
  @Output() welcomeFinished = new EventEmitter<boolean>();


  constructor(private portfolioService: PortfolioService) { }


  /**
   * Prevents the overflow of the body and starts the welcome text after 2 seconds.
   */
  ngOnInit(): void {
    document.body.style.setProperty('overflow', 'hidden');
    setTimeout(() => {
      this.splitText();
    }, 2000);
  }


  /**
   * Splits the text into individual letters and saves them in an array.
   */
  splitText() {
    let textInterval = setInterval(() => {
      if (this.counter == this.text.length) {
        clearInterval(textInterval);
        this.exitWelcomeScreen();
      } else {
        this.textArray.push(this.text.charAt(this.counter));
        this.counter++;        
      }
    }, 130);
  }


  /**
   * Exits the welcome screen.
   */
  exitWelcomeScreen() {
    setTimeout(() => {
      this.welcomeFinished.emit(true);
      document.body.style.removeProperty('overflow');
    }, 1000);
    setTimeout(() => {
      this.portfolioService.welcomeScreen = false;
    }, 1400);
  }


}