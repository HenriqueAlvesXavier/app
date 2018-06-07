import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-compra',
  templateUrl: 'lista-compra.html',
})
export class ListaCompraPage {
  compras;
  novaCompra;
  dataatual;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.compras = ['Arroz', 'Feijão'];
    this.dataatual = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCompraPage');
  }
  add() {
    this.compras.push(this.novaCompra);
    this.novaCompra='';
    let alert = this.alertCtrl.create({
    title: 'Sucesso',
    subTitle: 'Compra Cadastrada com Sucesso!',
    buttons: ['OK!']
      });
    alert.present();
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
        }
      }
    ]
  });
  alert.present();
  }
