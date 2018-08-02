import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormUsuarioPage } from './form-usuario';

@NgModule({
  declarations: [
    FormUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(FormUsuarioPage),
  ],
})
export class FormUsuarioPageModule {}
