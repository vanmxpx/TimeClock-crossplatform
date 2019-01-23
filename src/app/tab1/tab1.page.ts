import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
