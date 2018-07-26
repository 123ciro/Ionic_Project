import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions,BarcodeScanResult } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  resultado:BarcodeScanResult;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private bcs:BarcodeScanner,
  private toastCtr: ToastController) {
  }



  scanBarcode(){
    const opciones:BarcodeScannerOptions={
      prompt:'Pon la Camara sobre un codigo de Barra',
      torchOn: false
    };

    this.bcs.scan(opciones).then(res => {
      this.resultado=res;
    }).catch(err=>{
      this.toastCtr.create({
        message:err.message
      }).present();
    })


  }

}
