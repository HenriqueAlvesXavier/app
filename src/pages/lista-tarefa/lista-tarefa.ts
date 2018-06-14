import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, ModalController } from 'ionic-angular';
import {NovaTarefaPage} from '../nova-tarefa/nova-tarefa';

@IonicPage()
@Component({
  selector: 'page-lista-tarefa',
  templateUrl: 'lista-tarefa.html',
})
export class ListaTarefaPage {
  tarefas;
  dataatual;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController,
    public loadingCtrl: LoadingController, public ModalCtrl: ModalController) {
    this.tarefas = ['Estudar para o enem', 'Beber água', 'Comer direito'];
    this.dataatual = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaTarefaPage');
  }
  novatarefa(){
    let modal = this.ModalCtrl.create(NovaTarefaPage, {});
    modal.onDidDismiss(data => {
      this.add(data.novaTarefa);
    })
    modal.present();
  }

  add(novaTarefa) {
    //Cria e exibe o loader
    let loading = this.loadingCtrl.create({
      content: 'Processando...'
    });
    loading.present();

    //\Realiza a atividade solicitada
    this.tarefas.push(novaTarefa);

    //Após o tempo configurado, exibe o toast de sucesso e finaliza o loader
    setTimeout(() => {
      let toast = this.toastCtrl.create({
        message: 'Tarefa cadastrada com sucesso!',
        duration: 1500,
        position: 'bottom'
        });
        toast.present();
        loading.dismiss();
    }, 1500);

  }

  delete(tarefa){
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

            let loading = this.loadingCtrl.create({
              content: 'Excluindo...'
            });

            loading.present();
            setTimeout(() => {
              var i = this.tarefas.indexOf(tarefa);
              this.tarefas.splice(i, 1);

              let toast = this.toastCtrl.create({
                message: 'Tarefa excluída com sucesso',
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
