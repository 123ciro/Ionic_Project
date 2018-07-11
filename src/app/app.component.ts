import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,icon :string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon :'http://blog.aulaformativa.com/wp-content/uploads/2017/02/principales-usos-de-los-iconos-diseno-web-optimizar-navegacion.jpg' },

      { title: 'Paises', component: 'PaisesPage',icon: 'https://cdn.icon-icons.com/icons2/1151/PNG/512/1486505386-editor-flag-marker-nation-country-notification-pin_81410.png' },
      { title: 'Clientes', component: 'ClientesPage',icon:'data:image/png;base64,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' },
      { title: 'Usuarios', component: 'UsuariosPage',icon:'https://cdn.pixabay.com/photo/2013/07/12/14/36/blue-148582_960_720.png' }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
