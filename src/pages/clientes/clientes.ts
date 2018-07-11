import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteService } from '../../services/clientes/clientes.service';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {
  term: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _clientes: ClienteService) {
    this._clientes.get();

  }

  openDetalle(cliente) {
    this.navCtrl.push('ClientesDetallePage', cliente);
  }

  buscar() {

    this._clientes.buscar(this.term);
  }

}
