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
import {ShopsPage} from "../pages/shops/shops";
import {ProfilePage} from "../pages/profile/profile";
import {HttpClient} from "@angular/common/http";
import * as mapboxgl from 'mapbox-gl';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private http: HttpClient,
              public global: GlobalService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.http.get(this.global.url_getShops, {}).subscribe(data => {
        this.global.storage_shops = data;
      });
      this.http.get(this.global.url_getSales, {}).subscribe(data => {
        this.global.storage_sales = data;
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Carte', component: MapPage},
      { title: 'Évenements', component: EventsPage },
      { title: 'Promotions', component: ShopsPage},
      { title: 'Compte', component: ProfilePage},
      { title: 'Déconnexion', component: HomePage }
    ];
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
