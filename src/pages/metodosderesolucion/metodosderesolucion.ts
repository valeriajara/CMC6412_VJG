import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MetodosderesolucionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-metodosderesolucion',
  templateUrl: 'metodosderesolucion.html',
})
export class MetodosderesolucionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MetodosderesolucionPage');
  }

  igualacion(){
    this.navCtrl.push("IgualacionPage");
  }

  sustitucion(){
    this.navCtrl.push("SustitucionPage");
  }

  reduccion(){
    this.navCtrl.push("ReduccionPage");
  }

  cramer(){
    this.navCtrl.push("CramerPage");
  }

}
