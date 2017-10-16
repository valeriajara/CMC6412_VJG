import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MedianteproductonotablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medianteproductonotable',
  templateUrl: 'medianteproductonotable.html',
})
export class MedianteproductonotablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedianteproductonotablePage');
  }

  binomios(){
    this.navCtrl.push("BinomiosPage");
  }

  trinomios(){
    this.navCtrl.push("TrinomiosPage");
  }
}
