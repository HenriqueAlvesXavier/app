import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-tarefa',
  templateUrl: 'lista-tarefa.html',
})
export class ListaTarefaPage {
  tarefas;
  novaTarefa;
  dataatual;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.tarefas = ['Estudar para o enem', 'Beber água', 'Comer direito'];
    this.dataatual = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaTarefaPage');
  }

  add() {
    let toast = this.toastCtrl.create({
    message: 'Tarefa cadastrada com sucesso!',
    duration: 1500,
    position: 'top'
  });
    toast.present();
  }

  delete(tarefa) {
    let alert = this.alertCtrl.create({
      title: 'Confirmação',
      message: 'Deseja excluir essa tarefa?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
          }
        },
        {
          text: 'Sim',
          handler: () => {
            var i = this.tarefas.indexOf(tarefa);
            this.tarefas.splice(i, 1);
          }
        }
      ]
    });
    alert.present();
  }
}
