import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MenuPageRoutingModule } from './menu.router.module';

import { MenuPage } from './menu.page';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    IonicModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    MenuPageRoutingModule
  ],
    declarations: [MenuPage]
})
export class MenuPageModule {}
