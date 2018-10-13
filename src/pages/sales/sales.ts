import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from "../home/home";
import { HttpClient } from "@angular/common/http";
import {FiltersPage} from "../filters/filters";
import {ShopShowcase} from "../shopShowcase/shopShowcase";
import {GlobalService} from "../../services/GlobalService";

@Component({
  selector: 'page-sales',
  templateUrl: 'sales.html'
})
export class SalesPage {

  res_shops: any;
  res_sales: any;

    constructor(public navCtrl: NavController,
                private http: HttpClient,
                private global: GlobalService) { }

  ngOnInit() {
    this.http.get(this.global.url_getShops, {}).subscribe(data => {
      this.res_shops = data;
      this.global.storage_shops = data;
    });
    this.http.get(this.global.url_getSales, {}).subscribe(data => {
        this.res_sales = data;
      });
  }

  showFiltersPage(){
      this.navCtrl.push(FiltersPage);
  }

  showShopPage(shopId: string){
      this.navCtrl.push(ShopShowcase, {shopid: shopId});
  }

  private sales: any[] = [
    {
      "name": "Godasses pas chères a a a a aaaaaaaaaaaaaaaaaaaaaaaaaaa",
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
      "baseprice": "34555876.-",
      "finalprice": "232432.-",
      "discount": "-15000.-"
    },
    {
      "name": "Autre promo",
      "shop": "Magasin",
      "address": "Boulevard de la saucisse",
      "baseprice": "1000.-",
      "finalprice": "2.-",
      "discount": "-87%"
    },
    {
      "name": "Autre promo",
      "shop": "Magasin",
      "address": "Boulevard de la saucisse",
      "baseprice": "1000.-",
      "finalprice": "2.-",
      "discount": "-15%"
    },
    {
      "name": "Autre promo",
      "shop": "Magasin",
      "address": "Boulevard de la saucisse",
      "baseprice": "1000.-",
      "finalprice": "2.-",
      "discount": "-15%"
    },
    {
      "name": "Autre promo",
      "shop": "Magasin",
      "address": "Boulevard de la saucisse",
      "baseprice": "1000.-",
      "finalprice": "2.-",
      "discount": "-15%"
    },
    {
      "name": "Autre promo",
      "shop": "Magasin",
      "address": "Boulevard de la saucisse",
      "baseprice": "1000.-",
      "finalprice": "2.-",
      "discount": "15%"
    },
    {
      "name": "Autre promo",
      "shop": "Magasin",
      "address": "Boulevard de la saucisse",
      "baseprice": "1000.-",
      "finalprice": "2.-",
      "discount": "15%"
    },
    {
      "name": "Autre promo",
      "shop": "Magasin",
      "address": "Boulevard de la saucisse",
      "baseprice": "1000.-",
      "finalprice": "2.-",
      "discount": "15%"
    },
    {
      "name": "Autre promo",
      "shop": "Magasin",
      "address": "Boulevard de la saucisse",
      "baseprice": "1000.-",
      "finalprice": "2.-",
      "discount": "15%"
    },
    {
      "name": "Autre promo",
      "shop": "Magasin",
      "address": "Boulevard de la saucisse",
      "baseprice": "1000.-",
      "finalprice": "2.-",
      "discount": "15%"
    },
    {
      "name": "Autre promo",
      "shop": "Magasin",
      "address": "Boulevard de la saucisse",
      "baseprice": "1000.-",
      "finalprice": "2.-",
      "discount": "15%"
    },
    {
      "name": "Autre promo",
      "shop": "Magasin",
      "address": "Boulevard de la saucisse",
      "baseprice": "1000.-",
      "finalprice": "2.-",
      "discount": "15%"
    },
    {
      "name": "Autre promo",
      "shop": "Magasin",
      "address": "Boulevard de la saucisse",
      "baseprice": "1000.-",
      "finalprice": "2.-",
      "discount": "15%"
    }
  ];

}

/*
OLD PROMOTIONS PAGE V1
</ion-content>
  <ion-list>
    <div *ngFor="let sale of sales">
      <ion-item>
        <div class="promItem">
          <img src="assets/imgs/hilogo.jpg" class="promImage">

          <div class="promContent">
            <p class="promName">{{sale.name}}</p>
            <p>{{sale.shop}}</p>
            <p>{{sale.address}}</p>
            <p class="promPrice">{{sale.finalprice}} au lieu de {{sale.baseprice}}</p>
          </div>
        </div>
        <div class="promButton">
        <button ion-button outline small color="dark" item-left-bottom>
          <ion-icon name="md-arrow-round-forward"></ion-icon>
          <span style="width: 3px;"></span>Let's go
        </button>
      </div>
        <ion-thumbnail item-end class="promReduc">
          <span class="promReducText">{{sale.discount}}</span>
        </ion-thumbnail>
      </ion-item>
    </div>
  </ion-list>
</ion-content>

.promItem{
    margin-top: 2%;
  }
  .promImage {
    width: 25%;
    height: 25%;
    float: left;
  }
  .promButton{
    font-family: Calibri;
    font-style: italic;
    float: left;
  }
  .promContent{
    width: 65%;
    float: right;
    margin-left: 3px;
  }

  .promName{
    font-size: 1.0em;
    color: #222222;
    padding-bottom: 3px;
  }
  .promPrice{
    padding-top: 5px;
    font-size: 0.9em;
    color: #222222;
  }
  .promReduc{
    background-color: $hiliveorangeLight;
    border-radius: 25px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .promReducText{
    color: white;
    font-size: 1.3em;
  }
 */

/*
OLD PROMOTION PAGE V2
<ion-content class="card-background-page">
  <div>{{vardump}}salut</div>
  <div *ngFor="let sale of sales">
    <ion-card>
      <img src="assets/imgs/hilogo.jpg"/>
      <div class="card-title">{{sale.name}}</div>
      <div class="card-subtitle">{{sale.shop}}</div>
      <p class="saleAddress">{{sale.address}}</p>
      <p class="salePrice">{{sale.finalprice}} au lieu de {{sale.baseprice}}</p>
    </ion-card>
  </div>
</ion-content>

.card-background-page {
    color: black;

    ion-card {
      position: relative;
      text-align: center;
      max-height: 160px;
    }

    .card-title {
      position: absolute;
      top: 25%;
      font-size: 1.8em;
      width: 100%;
      font-weight: bold;
    }

    .card-subtitle {
      font-size: 1.2em;
      position: absolute;
      top: 45%;
      width: 100%;
    }

  }

  .saleAddress {
    position: absolute;
    top: 58%;
    font-size: 1.1em;
    width: 100%;
  }
  .salePrice{
    position: absolute;
    top: 80%;
    font-size: 1.5em;
    width: 100%;
    font-weight: bold;
  }
 */
