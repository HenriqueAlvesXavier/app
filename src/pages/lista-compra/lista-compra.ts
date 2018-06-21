import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { NovaCompraPage } from '../nova-compra/nova-compra';

@IonicPage()
@Component({
  selector: 'page-lista-compra',
  templateUrl: 'lista-compra.html',
})
export class ListaCompraPage {

  compras;
  dataatual;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController,
    public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
    this.compras = ['Celular', 'JBL'];
    this.dataatual = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCompraPage');
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

    //Após o tempo configurado, exibe o toast de sucesso e finaliza o loader
    setTimeout(() => {
      let toast = this.toastCtrl.create({
        message: 'Compra cadastrada com sucesso!',
        duration: 1500,
        position: 'bottom'
        });
        toast.present();
        loading.dismiss();
    }, 1500);

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
            setTimeout(() => {
              var i = this.compras.indexOf(compra);
              this.compras.splice(i, 1);

              let toast = this.toastCtrl.create({
                message: 'Compra excluída com sucesso',
                duration: 5000,
                position: 'bottom'
              });
              toast.present();
              loading.dismiss();
            }, 1500);
          }
        }
      ]
    });
    alert.present();
  }
}
