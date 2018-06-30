import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { NovaCompraPage } from '../nova-compra/nova-compra';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-lista-compra',
  templateUrl: 'lista-compra.html',
})
export class ListaCompraPage {

  compras;
  dataatual;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController,
    public loadingCtrl: LoadingController, public modalCtrl: ModalController, public storage: Storage) {
      this.compras = [];
      this.storage.get('compras').then((val) => {
        this.compras = val;
      });
      this.dataatual = new Date();
    }

  novacompra(){
    let modal = this.modalCtrl.create("NovaCompraPage", {});
    modal.onDidDismiss(data => {
      this.add(data.novaCompra);
    })
    modal.present();
  }

  add(novaCompra) {
    //Cria e exibe o loader
    let loading = this.loadingCtrl.create({
      content: 'Processando...'
    });
    loading.present();

    //\Realiza a atividade solicitada
    this.compras.push(novaCompra);
    this.storage.set('compras', this.compras).then(() => {
      let toast = this.toastCtrl.create({
        message: 'Compra cadastrada com sucesso!',
        duration: 1500,
        position: 'bottom'
        });
        toast.present();
        loading.dismiss();
    });

  }

  delete(compra){
    let alert = this.alertCtrl.create({
      title: 'Confirmação',
      message: 'Deseja excluir essa compra?',
      buttons: [
        {
          text: 'Não',
          handler: () => {

          }
        },
        {
          text: 'Sim',
          handler: () => {

            let loading = this.loadingCtrl.create({
              content: 'Excluindo...'
            });

            loading.present();
              var i = this.compras.indexOf(compra);
              this.compras.splice(i, 1);

              this.storage.set('compras', this.compras).then(() => {
              let toast = this.toastCtrl.create({
                message: 'Compra excluída com sucesso',
                duration: 5000,
                position: 'bottom'
              });
              toast.present();
              loading.dismiss();
            });
          }
        }
      ]
    });
    alert.present();
  }
}
