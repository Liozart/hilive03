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

  res_events: any;
  i: number = 0;

  constructor(public navCtrl: NavController,
              public global: GlobalService,
              public menuCtrl: MenuController,
              public http: HttpClient) {
  }

  ngOnInit() {
    this.res_events = this.global.storage_cityEvents;
  }

  openFilters(){

  }
}
