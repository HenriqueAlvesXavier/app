
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

  usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public toastCtrl: ToastController,
    public loadingCtrl: LoadingController, public camera: Camera) {
      this.usuario = this.navParams.get('usuario')
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

  Tirarfoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.usuario.avatar = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

  }

}
