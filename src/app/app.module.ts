import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NgxModelModule} from 'ngx-model';
import { RestApiService } from '../services/rest-api.service';
import { PaisesService } from '../services/paises/paises.service';
import { HttpClientModule } from '@angular/common/http';
import {ClienteService} from '../services/clientes/clientes.service';
import {UsuariosService} from '../services/usuarios/usuarios.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxModelModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiService,
    PaisesService,
    ClienteService,
    UsuariosService

  ]
})
export class AppModule {}
