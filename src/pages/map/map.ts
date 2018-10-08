import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { GlobalService } from "../../services/GlobalService";
import { globAll } from "@ionic/app-scripts/dist/util/glob-util";
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage implements OnInit {

  mapToken: string;
  map: mapboxgl.Map;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public global: GlobalService) {
  }

  ngOnInit() {
    this.mapToken = this.global.map_token;
    mapboxgl.accessToken = this.mapToken;
    this.map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [-74.0066, 40.7135],
      zoom: 16,
      pitch: 80,
      minZoom: 7.5, //restrict map zoom - buildings not visible beyond 13
      maxZoom: 17,
      container: 'map'
    });
  }
}
