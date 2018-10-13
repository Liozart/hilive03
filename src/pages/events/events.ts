import { Component, OnInit } from '@angular/core';
import {MenuController, NavController, NavParams, ToastController} from 'ionic-angular';
import { GlobalService } from "../../services/GlobalService";
import { globAll } from "@ionic/app-scripts/dist/util/glob-util";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})

export class EventsPage implements OnInit{

  vardump: any;
  vardump2: any;

  constructor(public navCtrl: NavController,
              public global: GlobalService,
              public menuCtrl: MenuController,
              public http: HttpClient) {

    this.menuCtrl.enable(true);
  }

  ngOnInit(){
    this.http.get(this.global.url_getCityEvents, {}).subscribe(data => {
    });
  }
}
