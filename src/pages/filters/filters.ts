import { Component, OnInit } from '@angular/core';
import {MenuController, NavController, NavParams, ToastController} from 'ionic-angular';
import { GlobalService } from "../../services/GlobalService";
import { globAll } from "@ionic/app-scripts/dist/util/glob-util";

@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})

export class FiltersPage implements OnInit{

  filterMaxDistance: number;
  filterMaxPrice: number;
  range_priceNumber: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public global: GlobalService, private toastCtrl: ToastController,
              public menuCtrl: MenuController) {
    this.menuCtrl.enable(true);
  }

  ngOnInit(){
    this.filterMaxDistance = this.global.filter_maxDistance;
  }

  changeFilterCategory(cat: string, add: boolean) {
    /*if (add)
     this.global.filter_category.push(cat);
    else
      this.global.filter_category.push(cat);*/
  }

  changeFilterPrice(nb: number){
    this.global.filter_maxPrice = nb;
    this.filterMaxPrice = nb;
  }

  changeFilterDistance(km: number){
    this.global.filter_maxDistance = km;
    this.filterMaxDistance = km;
  }

  arrayRemove(arr, value) {
    return arr.filter(function(ele){
      return ele != value;
    });
  }
  presentToast(msg: string){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
