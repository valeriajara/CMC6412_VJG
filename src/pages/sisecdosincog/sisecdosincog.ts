import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SistemadeecuacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sisecdosincog',
  templateUrl: 'sisecdosincog.html',
})
export class SisecdosincogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SisecdosincogPage');
  }

  selcondosincognitas(){
    this.navCtrl.push("SelcondosincognitasPage");
  }

  ecuacionlinealcondosincognitas(){
    this.navCtrl.push("EldedosincognitasPage");
  }

  metodosderesolucion(){
    this.navCtrl.push("MetodosderesolucionPage");
  }

  herramientastecnologicas(){
    this.navCtrl.push("HerramientastecnologicasPage");
  }

}
