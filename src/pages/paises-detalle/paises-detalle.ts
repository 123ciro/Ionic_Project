import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PaisesDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paises-detalle',
  templateUrl: 'paises-detalle.html',
})
export class PaisesDetallePage {

pais :any = [];
paises :String="Geografia";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pais= this.navParams.data
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaisesDetallePage');
  }

}
