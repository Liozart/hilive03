import { Component, OnInit } from '@angular/core';
import {App, NavController, NavParams, ToastController} from 'ionic-angular';
import { GlobalService } from "../../services/GlobalService";
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage implements OnInit {

  map: mapboxgl.Map;
  shops_longlat = [
    [6.155065, 46.202324],
    [6.157065, 46.205324],
    [6.150065, 46.200324],
    [6.152065, 46.207324]];

  constructor(public navCtrl: NavController, public navParams: NavParams, app: App,
              public global: GlobalService, private toastCtrl: ToastController) {
    app._setDisableScroll(true);
  }

  ngOnInit() {
    //this.map = this.global.map;
    mapboxgl.accessToken = this.global.map_token;
    this.map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [6.156065, 46.207324],
      zoom: 14,
      minZoom: 8,
      maxZoom: 17,
      container: 'map'
    });
    for (let i of this.shops_longlat) {
      var marker = new mapboxgl.Marker().setLngLat(i).addTo(this.map);
    }
  }

  presentToast(msg: string){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
