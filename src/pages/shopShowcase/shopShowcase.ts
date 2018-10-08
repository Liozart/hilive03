import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { SalesPage } from "../sales/sales";
import {GlobalService} from "../../services/GlobalService";

@Component({
  selector: 'page-shopShowcase',
  templateUrl: 'shopShowcase.html'
})
export class ShopShowcase implements OnInit{

  shopId: string;
  shopName: string = "Magasin";
  shopSales: any;

  constructor(public navParams: NavParams,
              private http: HttpClient,
              public global: GlobalService) { }

  ngOnInit() {
    //this.shopId = this.navParams.get('shopid');
    this.shopId = "1";
    this.http.post(this.global.url_getSalesFromShop, {}, {
      headers: new HttpHeaders({
        shopid: this.shopId
      })
    }).subscribe(data => {
      this.shopSales = data;
    });

  }
  private sales: any[] = [
    {
      "name": "Godasses",
      "shopid": "1",
      "address": "15 rue du slip",
      "baseprice": "30.-",
      "finalprice": "25.-",
      "discount": "-15%"
    },
    {
      "name": "Autre promo",
      "shopid": "2",
      "address": "Boulevard de la saucisse",
      "baseprice": "1000.-",
      "finalprice": "2.-",
      "discount": "-mass%"
    },
    {
      "name": "SUPERLONGSQUADNAME",
      "shopid": "3",
      "address": "Super long nom de rue de la mort",
      "baseprice": "6.-",
      "finalprice": "232432.-",
      "discount": "-15000.-"
    },
    {
      "name": "SALUTSALUTSALUTSALUSALUSALUSALUSALUSALUS",
      "shopid": "4",
      "address": "Supeds",
      "baseprice": "6.-",
      "finalprice": "2.-",
      "discount": "-15.-"
    }];
}
