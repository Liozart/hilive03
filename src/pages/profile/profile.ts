import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import {GlobalService} from "../../services/GlobalService";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit{

  constructor(public navCtrl: NavController,
              private http: HttpClient,
              private global: GlobalService) {
  }

  ngOnInit() {

  }
}
