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

import { Network } from '@ionic-native/network';
import { Calendar } from '@ionic-native/calendar';
import { AppMinimize } from '@ionic-native/app-minimize';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FormUsuarioPage } from '../pages/form-usuario/form-usuario'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormUsuarioPage,


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
    FormUsuarioPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiService,
    PaisesService,
    ClienteService,
    UsuariosService,

    Network,
    Calendar,
    AppMinimize,
    BarcodeScanner

  ]
})
export class AppModule {}
