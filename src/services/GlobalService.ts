import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Injectable()
export class GlobalService {

  public isLogged: boolean;
  public token: string;

  public filter_category: string[];
  public filter_maxPrice: number;
  public filter_maxDistance: number;

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

  public storage_shops: any;
  public storage_sales: any;
  public storage_cityEvents: any;

  public profile_name: string;
  public profile_ageDate: Date;
  public profile_imageName: string;

}
