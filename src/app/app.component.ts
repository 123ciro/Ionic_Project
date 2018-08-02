import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { HomePage } from '../pages/home/home';
import { Calendar } from '@ionic-native/calendar';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any, icon: string }>;
  constructor(

    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private network: Network,
    private toast: ToastController,
    private calendar: Calendar

  ) {
    this.initializeApp();
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Paises', component: 'PaisesPage', icon: 'basketball' },
      { title: 'Clientes', component: 'ClientesPage', icon: 'person' },
      { title: 'Usuarios', component: 'UsuariosPage', icon: 'person' },
      { title: 'Scan', component: 'ScanPage', icon: 'barcode' },

    ];
    this.conexion();
    this.calendario();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  conexion() {
    this.network.onDisconnect().subscribe(() => {
      this.openToast('Desconectado de Internet');
    });

    this.network.onConnect().subscribe(() => {
      this.openToast('Conectado a Internet');

      // setTimeout(() => {
      //   if (this.network.type === 'wifi') {
      //     console.log('we got a wifi connection, woohoo!');
      //   }
      // }, 3000);
    });
  }

  openToast(mensaje: string) {
    let toast = this.toast.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  calendario() {
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  }
}
