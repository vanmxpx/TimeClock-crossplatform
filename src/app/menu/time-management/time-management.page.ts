import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'tc-time-management',
    templateUrl: 'time-management.page.html',
    styleUrls: ['time-management.page.scss']
})
export class TimeManagementPage {


    constructor(private menu: MenuController) { }

    openFirst() {
        this.menu.enable(true, 'main');
        this.menu.open('main');
    }

    openEnd() {
        this.menu.open('end');
    }

    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
}
