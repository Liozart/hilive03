import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { globAll } from "@ionic/app-scripts/dist/util/glob-util";

@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})

export class FiltersPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit(){
  }

  changeFilterCategory(cat: string, add: boolean) {
    /*if (add)
     this.global.filter_category.push(cat);
    else
      this.global.filter_category.push(cat);*/
  }

  changeFilterDistance(km: number){
    //this.global.filter_maxDistance = km;
  }

  arrayRemove(arr, value) {
    return arr.filter(function(ele){
      return ele != value;
    });
  }
}
