import { Component, OnInit } from '@angular/core';
import {NavController, App} from 'ionic-angular';
import {PromotionsPage} from "../promotions/promotions";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastController } from 'ionic-angular';
import jsSHA from 'jssha';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  newUserToggled : boolean;
  email : string = '';
  password : string = '';
  errorMessage : string;
  vardump: any;

  url_createUsr: string = 'http://localhost:3000/createUser';
  url_connectUsr: string = 'http://localhost:3000/connectUser';

  constructor(public navCtrl: NavController, private app: App, private http: HttpClient, public toastCtrl: ToastController)
  {
    //app._setDisableScroll(true);
  }

  ngOnInit() {
    this.newUserToggled = false;
  }

  onSubmitForm() {
    /* Check email validity */
    var trig = this.email,
      regex = new RegExp('[0-9a-zA-Z]*@[0-9a-zA-Z]*.[a-z]*'),
      test = regex.test(trig);
    if (test) {
      /* Hash password */
      let shaObj = new jsSHA("SHA-256", "TEXT");
      shaObj.update(this.password);
      let hashedPwd = shaObj.getHash("HEX");
      /* Connect or create user */
      if (this.newUserToggled) {
        this.http.post(this.url_createUsr, {}, {
          headers: new HttpHeaders({
            email: this.email,
            password: hashedPwd
          })
        }).subscribe(data => {
          this.vardump = JSON.stringify(data);
          this.presentToast(this.vardump.toLocaleString());
        });
      }
      else {
        this.http.post(this.url_connectUsr, {}, {
          headers: new HttpHeaders({
            email: this.email,
            password: hashedPwd
          })
        }).subscribe(data => {
          this.vardump = JSON.stringify(data);
          this.presentToast(this.vardump.toLocaleString());
        });
      }
    } else {
      this.presentToast("Email invalide");
    }
  }

  presentToast(msg: string){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  changeForPromotions(){
    this.navCtrl.setRoot(PromotionsPage);
  }
}
