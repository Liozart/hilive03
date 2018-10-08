import { Component, OnInit } from '@angular/core';
import {MenuController, NavController, NavParams, ToastController} from 'ionic-angular';
import { GlobalService } from "../../services/GlobalService";
import { globAll } from "@ionic/app-scripts/dist/util/glob-util";

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public global: GlobalService) {
  }

  ngOnInit() {

  }
}
