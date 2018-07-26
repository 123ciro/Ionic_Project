import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { AppMinimize } from '@ionic-native/app-minimize';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController,
     private appMinimize: AppMinimize,
     public platform: Platform) {
this.minimizar();
  }


  minimizar(){
    this.platform.registerBackButtonAction(() => {
      this.appMinimize.minimize();
   });
  }
}
