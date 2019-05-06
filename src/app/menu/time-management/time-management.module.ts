import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeManagementPage } from './time-management.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    MaterialModule,
    FormsModule,
        RouterModule.forChild([{ path: '', component: TimeManagementPage }])
  ],
    declarations: [TimeManagementPage]
})
export class TimeManagementPageModule {}
