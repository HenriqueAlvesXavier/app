import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-tarefa',
  templateUrl: 'lista-tarefa.html',
})
export class ListaTarefaPage {
  tarefas;
  novaTarefa;
  dataatual;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.tarefas = ['Estudar para o enem', 'Beber água', 'Comer direito'];
    this.dataatual = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaTarefaPage');
  }

  add() {
    this.tarefas.push(this.novaTarefa);
    this.novaTarefa='';
    let alert = this.alertCtrl.create({
    title: 'Sucesso',
    subTitle: 'Tarefa Cadastrada com Sucesso!',
    buttons: ['OK!']
      });
    alert.present();
  }
  delete(tarefa){
    var i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);
  }
}
