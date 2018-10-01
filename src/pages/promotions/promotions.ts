import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/AuthService';
import {HomePage} from "../home/home";
import { HTTP } from '@ionic-native/http'

@Component({
  selector: 'page-promotions',
  templateUrl: 'promotions.html'
})
export class PromotionsPage {
    private sales: any[] = [
    {
      "name": "Godasses pas chères",
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
      }
  ];

  vardump: any;


    constructor(public navCtrl: NavController,
              private authService: AuthService,
                private http: HTTP) { }

  ngOnInit() {
    this.http.get('http://ionic.io', {}, {})
      .then(data => {
        console.log(data);
      });
  }
}

