import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { PromotionsPage } from "../pages/promotions/promotions";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    // Initialize Firebase
    let config = {
      apiKey: "AIzaSyADM1rDsuluXMVBX7AI-DI1b8Mum6PiRlA",
      authDomain: "hitest-74ca7.firebaseapp.com",
      databaseURL: "https://hitest-74ca7.firebaseio.com",
      projectId: "hitest-74ca7",
      storageBucket: "hitest-74ca7.appspot.com",
      messagingSenderId: "389954677162"
    };
    firebase.initializeApp(config);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
