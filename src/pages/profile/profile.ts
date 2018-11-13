import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import {GlobalService} from "../../services/GlobalService";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit{

  res_name: string;
  res_age: Date;
  res_image: any;

  constructor(public navCtrl: NavController,
              private http: HttpClient,
              private global: GlobalService) {
  }

  ngOnInit() {
    this.res_name = this.global.profile_name;
    this.res_age = this.global.profile_ageDate;
    this.res_image = this.global.profile_imageName;
  }
}
