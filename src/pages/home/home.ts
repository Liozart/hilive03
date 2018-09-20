import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/AuthService';
import { NavParams } from 'ionic-angular';
import {PromotionsPage} from "../promotions/promotions";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  mode: string;

  constructor(public navCtrl: NavController,
              private authService: AuthService,
              private navParams: NavParams) { }

  ngOnInit() {

  }
}
