import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaisesDetallePage } from './paises-detalle';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PaisesDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(PaisesDetallePage),
    PipesModule
  ],
})
export class PaisesDetallePageModule {}
