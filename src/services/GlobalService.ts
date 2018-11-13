import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GlobalService {

  public isLogged: boolean;
  public token: string;

  public url_server: string = 'http://localhost:3600';

  public url_createUser: string = this.url_server + '/createUser';
  public url_connectUser: string = this.url_server + '/connectUser';
  public url_getShops: string = this.url_server + '/getShops';
  public url_getSales: string = this.url_server + '/getSales';
  public url_getSalesFromShop: string = this.url_server + '/getSalesFromShop';
  public url_getCityEvents: string = this.url_server + '/getCityEvents';
  public url_updateProfile: string = this.url_server + '/updateProfile';

  public map_token: string = "pk.eyJ1IjoibGlvemFydCIsImEiOiJjajl5NXJvbWI0dWhtMnBtdmJxeWlkNzBzIn0.gJ4P4FFmThRRNk-SsG6oIQ";
  public map: mapboxgl.Map;

  // {items[]}
  public storage_shops: any;
  // {items[]}
  public storage_sales: any;
  // {category: string, event: items[]}
  public storage_cityEvents: any;

  public profile_name: string;
  public profile_ageDate: Date;
  public profile_imageName: string;
  public profile_interests: string[];

  public filter_sales_category: string[];
  public filter_sales_maxPrice: number;
  public filter_sales_maxDistance: number;
  public filter_cityEvents_category_order: string[];

  public loadSales(http: HttpClient){
    http.get(this.url_getSales, {}).subscribe(data => {
      this.storage_sales = data;
    });
  }

  public loadShops(http: HttpClient){
    http.get(this.url_getShops, {}).subscribe(data => {
      this.storage_shops = data;
    });
  }

  public loadCityEvents(http: HttpClient){
    http.get(this.url_getCityEvents, {}).subscribe(data => {
      this.storage_cityEvents = data;
      this.storage_cityEvents = this.storage_cityEvents.items;

      var i = 0;
      var cats = [];

      /* Extract category for city events*/
      for (var ev of this.storage_cityEvents) {
        var d = ev.title.split(":", 2);
        ev.title = d[1];
        cats.push(d[0].split("-", 2)[1].trim());
      }

      /* Merge arrays for display */
      var merged = [];
      for (var ev2 of this.storage_cityEvents){
        merged.push({
          event : ev2,
          category : cats[i]
        });
        i++;
      }
      this.storage_cityEvents = merged;
    });
  }
}
