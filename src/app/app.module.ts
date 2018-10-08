import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule} from "@angular/common/http";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SalesPage } from "../pages/sales/sales";
import { FiltersPage } from "../pages/filters/filters";
import {GlobalService} from "../services/GlobalService";
import {ShopShowcase} from "../pages/shopShowcase/shopShowcase";
import {MapPage} from "../pages/map/map";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SalesPage,
    FiltersPage,
    ShopShowcase,
    MapPage
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
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalService
  ]
})
export class AppModule {}
