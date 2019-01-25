import { Component } from '@angular/core';

@Component({
    selector: 'tc-time-management',
    templateUrl: 'time-management.page.html',
    styleUrls: ['time-management.page.scss']
})
export class TimeManagementPage {
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
