import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from "../home/home";
import { HttpClient } from "@angular/common/http";
import {FiltersPage} from "../filters/filters";

@Component({
  selector: 'page-promotions',
  templateUrl: 'promotions.html'
})
export class PromotionsPage {
    private sales: any[] = [
    {
      "name": "Godasses pas chères a a a a a",
      "shop": "Poorman's Manor",
      "address": "15 rue du slip",
      "baseprice": "30.-",
      "finalprice": "25.-",
      "discount": "-15%"
    },
      {
        "name": "Autre promo",
        "shop": "Magasin",
        "address": "Boulevard de la saucisse",
        "baseprice": "1000.-",
        "finalprice": "2.-",
        "discount": "mass%"
      },
      {
        "name": "SUPERLONGSQUADNAME",
        "shop": "SUPERLONGDISTRIBNAME",
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
        "discount": "87%"
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

  vardump: any;


    constructor(public navCtrl: NavController,
                private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/getSales', {}).subscribe(data => {
        this.vardump = JSON.stringify(data);
      });
  }

  showFilters(){
      this.navCtrl.push(FiltersPage);
  }
}

/*
OLD PROMOTIONS PAGE
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
