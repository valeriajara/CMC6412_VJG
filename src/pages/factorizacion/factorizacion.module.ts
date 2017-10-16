import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FactorizacionPage } from './factorizacion';

@NgModule({
  declarations: [
    FactorizacionPage,
  ],
  imports: [
    IonicPageModule.forChild(FactorizacionPage),
  ],
})
export class FactorizacionPageModule {}
