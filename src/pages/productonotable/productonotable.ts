import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductonotablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productonotable',
  templateUrl: 'productonotable.html',
})
export class ProductonotablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductonotablePage');
  }

  cubodebinomio(){
    this.navCtrl.push("CubodebinomioPage");
  }

  cuadradodebinomio(){
    this.navCtrl.push("CuadradodebinomioPage");
  }

  sumaporsudiferencia(){
    this.navCtrl.push("SumaporsudiferenciaPage");
  }

  productobinomios(){
    this.navCtrl.push("PorunfactorencomunPage");
  }


}
