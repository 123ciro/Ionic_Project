import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsuariosDetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuarios-detalles',
  templateUrl: 'usuarios-detalles.html',
})
export class UsuariosDetallesPage {


  usu :any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usu=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosDetallesPage');
  }

}
