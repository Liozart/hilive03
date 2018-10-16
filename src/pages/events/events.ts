import { Component, OnInit } from '@angular/core';
import {MenuController, NavController, NavParams, ToastController} from 'ionic-angular';
import { GlobalService } from "../../services/GlobalService";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})

export class EventsPage implements OnInit {

  vardump: any;
  res_events: any;
  res_categories: Array<string>;
  i: number = 0;

  constructor(public navCtrl: NavController,
              public global: GlobalService,
              public menuCtrl: MenuController,
              public http: HttpClient) {
    this.res_categories = [];
  }

  ngOnInit() {
    this.http.get(this.global.url_getCityEvents, {}).subscribe(data => {
      this.res_events = data;
      this.res_events = this.res_events.items;
      for (var ev of this.res_events) {
        var d = ev.title.split(":", 2);
        ev.title = d[1];
        this.res_categories.push(d[0].split("-", 2)[1]);
        this.i++;
      }
    });
  }
}
