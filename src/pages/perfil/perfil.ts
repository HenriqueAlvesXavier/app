
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
      this.usuario = {
        'nome':'',
        'img':''
      }
  }

  cadastro() {
    let loading = this.loadingCtrl.create({
      content: 'Processando...'
    });
    loading.present();


    //this.tarefas.push(novaTarefa);
    this.storage.set('usuario', this.usuario).then(() => {
      let toast = this.toastCtrl.create({
        message: 'Usuário cadastrado com sucesso',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      loading.dismiss();
    });
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }


}
