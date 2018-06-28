import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaisesDetallePage } from './paises-detalle';

@NgModule({
  declarations: [
    PaisesDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(PaisesDetallePage),
  ],
})
export class PaisesDetallePageModule {}
