import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule} from "@angular/common/http";
import {DatePicker} from "@ionic-native/date-picker";
import { File } from "@ionic-native/file";
import {FilePath} from "@ionic-native/file-path";
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SalesPage } from "../pages/sales/sales";
import { FiltersPage } from "../pages/filters/filters";
import {ShopShowcase} from "../pages/shopShowcase/shopShowcase";
import {MapPage} from "../pages/map/map";
import {EventsPage} from "../pages/events/events";
import {ShopsPage} from "../pages/shops/shops";
import {ProfilePage} from "../pages/profile/profile";
import { EventsFiltersPage } from "../pages/eventsFilters/eventsFilters";
import {GlobalService} from "../services/GlobalService";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SalesPage,
    FiltersPage,
    ShopShowcase,
    MapPage,
    EventsPage,
    ShopsPage,
    ProfilePage,
    EventsFiltersPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SalesPage,
    FiltersPage,
    ShopShowcase,
    MapPage,
    EventsPage,
    ShopsPage,
    ProfilePage,
    EventsFiltersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalService,
    DatePicker,
    File,
    FilePath,
    Geolocation,
    Camera
  ]
})
export class AppModule {}
