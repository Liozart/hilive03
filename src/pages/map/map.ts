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
  target = [6.156065, 46.207324];

  shops: any;
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
    this.shops = this.global.storage_shops;
    //Set shop position if set from shopShowCase
    if (this.navParams.get('shopid') != null) {
      for (let shop of this.shops) {
        if (shop.id == this.navParams.get('shopid')) {
          this.target = [shop.longitude, shop.latitude];
        }
      }
    }
    //Set shop position if set from salesPage
    /*else if (this.navParams.get('shopname') != null) {
      for (let shop of this.shops) {
        if (shop.name == this.navParams.get('shopname')) {
          this.target = [shop.longitude, shop.latitude];
        }
      }
    }*/

    //this.map = this.global.map;
    mapboxgl.accessToken = this.global.map_token;
    this.map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/dark-v9',
      center: this.target,
      zoom: 14,
      minZoom: 8,
      maxZoom: 17,
      container: 'map'
    });
    for (let shop of this.shops) {
      let co = [shop.longitude, shop.latitude];
      let popup = new mapboxgl.Popup({offset: 25});
      popup.setText(shop.name);
      var marker = new mapboxgl.Marker()
        .setLngLat(co)
        .setPopup(popup)
        .addTo(this.map);
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
