import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

/**
 * Generated class for the UsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {
  term: string ="";
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public _usuarios:UsuariosService) {
    this._usuarios.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
  }

  buscar(){

    this._usuarios.buscar(this.term);
  }
}
