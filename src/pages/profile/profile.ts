import { Component, OnInit } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
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
              public alertCtrl: AlertController,
              private global: GlobalService) {
  }

  ngOnInit() {
    this.res_name = this.global.profile_name;
    this.res_age = this.global.profile_ageDate;
    this.res_image = this.global.profile_imageName;
  }

  showInterestList() {
    let alert = this.alertCtrl.create();
    alert.setTitle("Centres d'interêt");

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
       /* this.testCheckboxOpen = false;
        this.testCheckboxResult = data;*/
      }
    });
    alert.present();
  }
}
