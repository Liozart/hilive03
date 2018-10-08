import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  public isLogged = false;
  public token: string;

  public filter_category: string[];
  public filter_maxPrice: number;
  public filter_maxDistance: number;

  public url_createUser: string = 'http://localhost:3000/createUser';
  public url_connectUser: string = 'http://localhost:3000/connectUser';
  public url_getShops: string = 'http://localhost:3000/getShops';
  public url_getSales: string = 'http://localhost:3000/getSales';
  public url_getSalesFromShop: string = 'http://localhost:3000/getSalesFromShop';
}