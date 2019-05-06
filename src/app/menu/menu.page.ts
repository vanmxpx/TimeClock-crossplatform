import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'tc-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage {

    constructor(private menu: MenuController) { }

    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
      }
    
      openEnd() {
        this.menu.open('end');
      }
    
      openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
      }
}
