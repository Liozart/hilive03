import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import {FiltersPage} from "../filters/filters";
import {ShopShowcase} from "../shopShowcase/shopShowcase";
import {GlobalService} from "../../services/GlobalService";
import {SalesPage} from "../sales/sales";

@Component({
  selector: 'page-shops',
  templateUrl: 'shops.html'
})
export class ShopsPage implements OnInit{

  res_shops: any;
  res_sales: any;

  constructor(public navCtrl: NavController,
              private http: HttpClient,
              private global: GlobalService) {
  }

  ngOnInit() {
    this.res_shops = this.global.storage_shops;
    this.res_sales = this.global.storage_sales;
  }

  swipeEvent(e) {
    if (e.direction == 2 || e.direction == 4) {
      this.showSalesPage();
    }
  }

  showShopPage(shopId: string){
    this.navCtrl.push(ShopShowcase, {shopid: shopId});
  }

  showFiltersPage(){
    this.navCtrl.push(FiltersPage);
  }

  showSalesPage(){
    this.navCtrl.push(SalesPage);
    this.navCtrl.setRoot(SalesPage);
  }
}
