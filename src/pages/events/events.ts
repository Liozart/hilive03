import { Component, OnInit } from '@angular/core';
import {MenuController, NavController, NavParams, ToastController} from 'ionic-angular';
import { GlobalService } from "../../services/GlobalService";
import { globAll } from "@ionic/app-scripts/dist/util/glob-util";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})

export class EventsPage implements OnInit {

  vardump: any;
  res_events: Observable<any>;

  constructor(public navCtrl: NavController,
              public global: GlobalService,
              public menuCtrl: MenuController,
              public http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.global.url_getCityEvents, {}).subscribe(data => {
      this.res_events = data.items;
      for (var ev of this.res_events) {
        ev.title = ev.title.split(":", 2)[1];
      }
    });
  }
}
