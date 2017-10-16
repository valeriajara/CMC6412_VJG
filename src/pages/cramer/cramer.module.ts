import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CramerPage } from './cramer';

@NgModule({
  declarations: [
    CramerPage,
  ],
  imports: [
    IonicPageModule.forChild(CramerPage),
  ],
})
export class CramerPageModule {}
