import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovaCompraPage } from './nova-compra';

@NgModule({
  declarations: [
    NovaCompraPage,
  ],
  imports: [
    IonicPageModule.forChild(NovaCompraPage),
  ],
})
export class NovaCompraPageModule {}
