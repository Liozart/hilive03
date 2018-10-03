import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})

export class FiltersPage implements OnInit{

  filter_category: string[];
  filter_maxPrice: number;
  filter_maxDistance: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit(){
    this.filter_maxDistance = 10;
    this.filter_maxPrice = 50;
  }
  changeFilterDistance(km: number){
    this.filter_maxDistance = km;
  }
}
