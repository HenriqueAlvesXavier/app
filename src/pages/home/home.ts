import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaTarefaPage} from '../lista-tarefa/lista-tarefa';
import { ListaCompraPage} from '../lista-compra/lista-compra';
import { PerfilPage } from '../perfil/perfil';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario;

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.usuario = {
      'nome':'',
      'img':''
    }

    this.storage.get('usuario').then((val) => {
      if(!val){
        this.navCtrl.push(PerfilPage)
      }else{
        this.usuario = val;
      }

    });
  }
  exibirPerfil() {
    this.navCtrl.push(PerfilPage);
  }
  exibirLista() {
    this.navCtrl.push(ListaTarefaPage);
  }

  exibirCompra() {
    this.navCtrl.push(ListaCompraPage);
  }

}
