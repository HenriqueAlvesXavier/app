import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nova-compra',
  templateUrl: 'nova-compra.html',
})
export class NovaCompraPage {

  novaCompra;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  add(){
    let data = {'novaCompra':this.novaCompra};
    this.viewCtrl.dismiss(data);
  }
}
