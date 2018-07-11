import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientesDetallePage } from './clientes-detalle';

@NgModule({
  declarations: [
    ClientesDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(ClientesDetallePage),
  ],
})
export class ClientesDetallePageModule {}
