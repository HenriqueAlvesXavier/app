import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-lista-evento',
  templateUrl: 'lista-evento.html',
})
export class ListaEventoPage {
  eventos;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController) {
    this.eventos = [];
    this.get().then((eventos) => {
      let loading = this.loadingCtrl.create({
      content: 'Processando...'

    });

    loading.present();
    this.eventos = eventos;
    loading.dismiss();
    })
  }
  get() {
    return new Promise(resolve => {
      this.http.get("https://seminfo.herokuapp.com/api/events").map(res => res.json()).subscribe(data => {
        resolve(data.events);
      });
    })
  }
}
