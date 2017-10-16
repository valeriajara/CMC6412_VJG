import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  pagesInicio: Array<{title: string, component: any, icon: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pagesInicio = [
      {title: "Álgebra y Funciones", component: HomePage, icon: "home" },
      {title: "Álgebra", component: "P1Page", icon: "create"},
      {title: "Funciones", component: "FuncionesPage", icon: "analytics"},
    ];
  }
  openPage(p){
    this.nav.setRoot(p.component);  
}


}