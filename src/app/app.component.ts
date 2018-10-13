import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SalesPage } from "../pages/sales/sales";
import { FiltersPage } from "../pages/filters/filters";
import { ShopShowcase } from "../pages/shopShowcase/shopShowcase";
import {MapPage} from "../pages/map/map";
import {GlobalService} from "../services/GlobalService";
import {EventsPage} from "../pages/events/events";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;
  rootPage:any = SalesPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public global: GlobalService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      //this.global.initMap();
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Carte', component: MapPage},
      { title: 'Évenements', component: EventsPage },
      { title: 'Promotions', component: SalesPage },
      { title: 'Déconnexion', component: HomePage }
    ];
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
