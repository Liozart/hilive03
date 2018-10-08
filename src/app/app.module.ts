import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule} from "@angular/common/http";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PromotionsPage } from "../pages/promotions/promotions";
import { FiltersPage } from "../pages/filters/filters";
import {GlobalService} from "../services/GlobalService";
import {ShopShowcase} from "../pages/shopShowcase/shopShowcase";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PromotionsPage,
    FiltersPage,
    ShopShowcase
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
    PromotionsPage,
    FiltersPage,
    ShopShowcase
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalService
  ]
})
export class AppModule {}
