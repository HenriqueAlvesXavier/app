import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import {HttpModule } from '@angular/http';

import { ListaTarefaPage } from '../pages/lista-tarefa/lista-tarefa';
import { ListaCompraPage } from '../pages/lista-compra/lista-compra';
import { NovaTarefaPage } from '../pages/nova-tarefa/nova-tarefa';
import { PerfilPage } from '../pages/perfil/perfil';
import { ListaEventoPage } from '../pages/lista-evento/lista-evento';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaTarefaPage,
    ListaCompraPage,
    NovaTarefaPage,
    PerfilPage,
    ListaEventoPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaTarefaPage,
    ListaCompraPage,
    NovaTarefaPage,
    PerfilPage,
    ListaEventoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
