import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FactorizacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-factorizacion',
  templateUrl: 'factorizacion.html',
})
export class FactorizacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactorizacionPage');
  }

  factorizacionfactorcomun(){
    this.navCtrl.push("FactorizacionfactorcomunPage");
  }

  medianteproductonotable(){
    this.navCtrl.push("MedianteproductonotablePage");
  }

}
