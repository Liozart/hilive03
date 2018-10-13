import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Injectable()
export class GlobalService {

  public isLogged: boolean;
  public token: string;

  public filter_category: string[];
  public filter_maxPrice: number;
  public filter_maxDistance: number;

  public url_createUser: string = 'http://localhost:3000/createUser';
  public url_connectUser: string = 'http://localhost:3000/connectUser';
  public url_getShops: string = 'http://localhost:3000/getShops';
  public url_getSales: string = 'http://localhost:3000/getSales';
  public url_getSalesFromShop: string = 'http://localhost:3000/getSalesFromShop';
  public url_getCityEvents: string = 'http://localhost:3000/getCityEvents';

  public map_token: string = "pk.eyJ1IjoibGlvemFydCIsImEiOiJjajl5NXJvbWI0dWhtMnBtdmJxeWlkNzBzIn0.gJ4P4FFmThRRNk-SsG6oIQ";
  public map: mapboxgl.Map;

  initMap(){
    mapboxgl.accessToken = this.map_token;
    this.map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [6.156065, 46.207324],
      zoom: 14,
      pitch: 40,
      minZoom: 8, //restrict map zoom - buildings not visible beyond 13
      maxZoom: 17.5,
      container: 'map'
    });
  }
}
