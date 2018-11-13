import { Component, OnInit } from '@angular/core';
import {MenuController, NavController, NavParams, reorderArray, ToastController} from 'ionic-angular';
import { GlobalService } from "../../services/GlobalService";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {EventsPage} from "../events/events";

@Component({
  selector: 'page-eventsFilters',
  templateUrl: 'eventsFilters.html',
})

export class EventsFiltersPage implements OnInit {

  cityEvents_categories: string[];

  constructor(public navCtrl: NavController,
              public global: GlobalService,
              public menuCtrl: MenuController,
              public http: HttpClient) {
    this.menuCtrl.enable(false, "mainMenu");

    /* get categories of events */
    this.cityEvents_categories = [];
    for (var ev of this.global.storage_cityEvents)
      if (this.cityEvents_categories.lastIndexOf(ev.category) == -1)
        this.cityEvents_categories.push(ev.category);
  }

  reorderItems(indexes) {
    this.cityEvents_categories = reorderArray(this.cityEvents_categories, indexes);
  }

  clickOnBackButton(){
    this.navCtrl.setRoot(EventsPage);
  }

  ngOnInit(){

  }
}
