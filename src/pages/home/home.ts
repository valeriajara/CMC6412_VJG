import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 

  constructor(public navCtrl: NavController) {

  }
p1(){
  this.navCtrl.push("P1Page");
}

algebra(){
  this.navCtrl.push("P1Page");
}

sistemadeecuaciones(){
  this.navCtrl.push("SisecdosincogPage");
}

}
