import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuariosDetallesPage } from './usuarios-detalles';

@NgModule({
  declarations: [
    UsuariosDetallesPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuariosDetallesPage),
  ],
})
export class UsuariosDetallesPageModule {}
