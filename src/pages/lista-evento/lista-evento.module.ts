import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEventoPage } from './lista-evento';

@NgModule({
  declarations: [
    ListaEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaEventoPage),
  ],
})
export class ListaEventoPageModule {}
