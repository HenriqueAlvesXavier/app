import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-compra',
  templateUrl: 'lista-compra.html',
})
export class ListaCompraPage {
  compras;
  novaCompra;
  dataatual;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    this.compras = ['Arroz', 'Feijão'];
    this.dataatual = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCompraPage');
  }


  add() {
    let loading = this.loadingCtrl.create({
    content: 'Processando...'
  });

  loading.present();

  setTimeout(() => {
    this.compras.push(this.novaCompra);
    this.novaCompra='';
    let toast = this.toastCtrl.create({
      message: 'Compra cadastrada com sucesso!',
      duration: 1500,
      position: 'bottom'
      });
      toast.present();
      loading.dismiss();
  }, 5000);
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
            var i = this.compras.indexOf(compra);
            this.compras.splice(i, 1);
            let toast = this.toastCtrl.create({
            message: 'Compra excluída com sucesso!',
            duration: 1500,
            position: 'bottom'
          });
            toast.present();
          }
        }
      ]
    });
    alert.present();
    }
  }
