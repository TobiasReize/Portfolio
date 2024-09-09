import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollerService {

  constructor(private scroller: ViewportScroller) { }

  
  scrollToAnchor(id: string) {
    this.scroller.scrollToAnchor(id);
  }
}
