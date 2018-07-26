import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaisesPage } from './paises';
import { PaisesService } from '../../services/paises/paises.service';
import {  HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PaisesPage,
  ],
  imports: [
    IonicPageModule.forChild(PaisesPage),
    HttpClientModule,
    PipesModule
  ],
  providers:[
    PaisesService,



  ]
})
export class PaisesPageModule {}
