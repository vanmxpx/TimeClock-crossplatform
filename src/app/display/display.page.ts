import { Component } from '@angular/core';

@Component({
  selector: 'tc-display',
  templateUrl: 'display.page.html',
  styleUrls: ['display.page.scss']
})
export class Display {
  tst: string = 'fasfasfsf';

  constructor() {
    this.tst = '';
  }

  onClick() {
    this.tst = '';
  }

  onClick2() {
    this.tst = '';
  }

  onClick23() {
    this.tst = '';
  }
}
